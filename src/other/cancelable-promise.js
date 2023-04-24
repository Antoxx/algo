'use strict';

class Cancelable extends Promise {
  constructor(executor) {
    super((resolve, reject) => {
      executor((val) => {
        if (this.canceled) {
          reject(new Error('Cancelled'));
          return;
        }
        resolve(val);
      }, reject);
    });
    this.canceled = false;
  }

  cancel() {
    this.canceled = true;
  }
}

// Usage

{
  const promise = new Cancelable((resolve) => {
    setTimeout(() => {
      resolve('first');
    }, 10);
  });

  promise.then(console.log).catch(console.log);
  console.dir({ promise });
}

{
  const promise = new Cancelable((resolve) => {
    setTimeout(() => {
      resolve('second');
    }, 10);
  });

  promise.cancel();
  promise.then(console.log).catch(console.log);
  console.dir({ promise });
}

// =========================================================================

{
  const cancelable = (promise) => {
    let cancelled = false;
    const next = promise.then((val) => {
      if (cancelled) {
        return Promise.reject(new Error('Canceled'));
      }
      return val;
    });
    next.cancel = () => {
      cancelled = true;
    };
    return next;
  };

  // Usage

  {
    const promise = cancelable(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('first');
        }, 10);
      }),
    );

    promise.then(console.log).catch(console.log);
    console.dir({ promise });
  }

  {
    const promise = cancelable(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('second');
        }, 10);
      }),
    );

    promise.cancel();
    promise.then(console.log).catch(console.log);
    console.dir({ promise });
  }
}

// =========================================================================

{
  const cancelable = (promise) => {
    let cancelled = false;
    return {
      promise: promise.then((val) => {
        if (cancelled) return Promise.reject(new Error('Canceled'));
        return val;
      }),
      cancel: () => {
        cancelled = true;
      },
    };
  };

  // Usage

  {
    const { cancel, promise } = cancelable(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('first');
        }, 10);
      }),
    );

    promise.then(console.log).catch(console.log);
    console.dir({ cancel, promise });
  }

  {
    const { cancel, promise } = cancelable(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('second');
        }, 10);
      }),
    );

    cancel();
    promise.then(console.log).catch(console.log);
    console.dir({ cancel, promise });
  }
}

// =========================================================================

{
  class Cancelable extends Promise {
    constructor(executor) {
      super((resolve, reject) => {
        let onCancel = null;
        const wrapCancel = (callback) => (val) => {
          if (this.canceled) {
            if (onCancel) {
              onCancel();
              onCancel = null;
            }
            return;
          }
          callback(val);
        };
        executor(wrapCancel(resolve), wrapCancel(reject), (callback) => {
          onCancel = callback;
        });
      });
      this.canceled = false;
    }

    cancel() {
      this.canceled = true;
    }
  }

  const fetch = (url) =>
    new Cancelable((resolve, reject, onCancel) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) resolve(xhr.responseText);
          else reject(`Status Code: ${xhr.status}`);
        }
      };
      xhr.open('GET', url, true);
      xhr.send();
      onCancel(() => {
        xhr.abort();
      });
    });

  // Usage

  const req = fetch('/person');

  req.then(
    (body) => (message.innerHTML = body),
    (err) => (message.innerHTML = err),
  );

  req.cancel();
  console.dir({ req });
}

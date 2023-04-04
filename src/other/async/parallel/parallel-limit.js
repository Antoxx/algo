function parallelLimit(promises, limit, callback) {
  const results = [];
  let cnt = promises.length;
  let lastIdx = limit - 1;

  function recurseResult(idx, err, res) {
    results[idx] = err || res;

    cnt--;
    lastIdx++;

    if (cnt === 0) {
      return callback(results);
    }

    if (lastIdx <= promises.length - 1) {
      promises[lastIdx].then(
        (res) => recurseResult(lastIdx, null, res),
        (err) => recurseResult(lastIdx, err),
      );
    }
  }

  Promise.all(
    promises.slice(0, limit).map((promise, idx) =>
      promise.then(
        (res) => recurseResult(idx, null, res),
        (err) => recurseResult(idx, err),
      ),
    ),
  );
}

const urls = ['https://yandex.ru', 'https://mail.ru', 'https://google.com'];
parallelLimit(
  urls.map((url) => fetch(url)),
  2,
  (results) => {
    results.map(async (response) => {
      if (response.ok) {
        console.log(response.url);
      } else {
        console.log(response.message);
      }
    });
  },
);

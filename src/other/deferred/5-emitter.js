'use strict';

const { EventEmitter } = require('node:events');

const DEFERRED_PENDING = 0;
const DEFERRED_RESOLVED = 1;
const DEFERRED_REJECTED = 2;

class Deferred extends EventEmitter {
  constructor(onDone = null, onFail = null) {
    super();
    this.value = undefined;
    if (onDone) this.on('done', onDone);
    if (onFail) this.on('fail', onFail);
    this.status = DEFERRED_PENDING;
  }

  isPending() {
    return this.status === DEFERRED_PENDING;
  }

  isResolved() {
    return this.status === DEFERRED_RESOLVED;
  }

  isRejected() {
    return this.status === DEFERRED_REJECTED;
  }

  done(callback) {
    this.on('done', callback);
    if (this.isResolved()) callback(this.value);
    return this;
  }

  fail(callback) {
    this.on('fail', callback);
    if (this.isRejected()) callback(this.value);
    return this;
  }

  resolve(value) {
    this.value = value;
    this.status = DEFERRED_RESOLVED;
    this.emit('done', value);
    return this;
  }

  reject(value) {
    this.value = value;
    this.status = DEFERRED_REJECTED;
    this.emit('fail', value);
    return this;
  }
}

// Usage

const persons = {
  10: 'Marcus Aurelius',
  11: 'Mao Zedong',
  12: 'Rene Descartes',
};

const getPerson = (id) => {
  const result = new Deferred();
  setTimeout(() => {
    const name = persons[id];
    if (name) result.resolve({ id, name });
    else result.reject(new Error('Person is not found'));
  }, 1000);
  return result;
};

const d1 = getPerson(10)
  .done((value) => console.log('Resolved d1', value))
  .fail((error) => console.log('Resolved d1', error));
console.dir({ d1 });

const d2 = getPerson(20)
  .done((value) => console.log('Resolved d2', value))
  .fail((error) => console.log('Resolved d2', error.message));
console.dir({ d2 });

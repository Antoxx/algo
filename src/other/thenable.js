'use strict';

import fs from 'node:fs';

class Thenable {
  constructor() {
    this.thenHandler = null;
    this.next = null;
  }

  then(fn) {
    this.thenHandler = fn;
    const next = new Thenable();
    this.next = next;
    return next;
  }

  resolve(value) {
    const fn = this.thenHandler;
    if (fn) {
      const next = fn(value);
      if (next) {
        next.then((value) => {
          this.next.resolve(value);
        });
      }
    }
  }
}

// Usage

const readFile = (filename) => {
  const thenable = new Thenable();
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    thenable.resolve(data);
  });
  return thenable;
};

const file1 = await readFile('./thenable.js');
console.dir({ length: file1.length });

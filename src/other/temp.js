'use strict';

function* counter(start, end, step) {
  while (end > start) {
    start += step;
    yield start;
  }
}

const c = counter(0, 30, 13);
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());

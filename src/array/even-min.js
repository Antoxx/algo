/**
 * Find the even min or -1
 */

import assert from 'assert';

function arrayEvenMin(arr) {
  let min = -1;
  for (const num of arr) {
    if (num % 2 === 0 && (min === -1 || min > num)) {
      min = num;
    }
  }

  return min;
}

function test(fn) {
  assert.deepStrictEqual(fn([]), -1, fn.name);
  assert.deepStrictEqual(fn([0]), 0, fn.name);
  assert.deepStrictEqual(fn([1, 2]), 2, fn.name);
  assert.deepStrictEqual(fn([4, 2, 3]), 2, fn.name);
  assert.deepStrictEqual(fn([2, 1, 5, 6]), 2, fn.name);
  assert.deepStrictEqual(fn([2, 5, 1, 0, -4]), -4, fn.name);
  assert.deepStrictEqual(fn([2, 5, -2, 0, -1, -4]), -4, fn.name);
}

test(arrayEvenMin);

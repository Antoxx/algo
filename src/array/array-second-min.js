/**
 * Find send min value in array without using sorting
 */

import assert from 'assert';

function arraySecondMin(arr) {
  const ln = arr.length;
  if (ln <= 1) {
    return ln === 1 ? arr[0] : null;
  }

  let min1 = arr[0];
  let min2 = Infinity;

  for (let i = 1; i < ln; i++) {
    const num = arr[i];
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num > min1 && num < min2) {
      min2 = num;
    }
  }

  return min2;
}

function test(fn) {
  assert.deepStrictEqual(fn([]), null, fn.name);
  assert.deepStrictEqual(fn([0]), 0, fn.name);
  assert.deepStrictEqual(fn([1, 2]), 2, fn.name);
  assert.deepStrictEqual(fn([2, 1]), 2, fn.name);
  assert.deepStrictEqual(fn([2, 1, 5]), 2, fn.name);
  assert.deepStrictEqual(fn([2, 5, 1, 0, 3]), 1, fn.name);
}

test(arraySecondMin);

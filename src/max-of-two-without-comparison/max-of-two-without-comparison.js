import assert from 'assert';

/**
 * Difference between 2 integers:
 * d = Math.abs(x - y)
 * SUm of 2 integers:
 * x + y = max + min = max + max - d = 2*max - d
 * Hence:
 * max = (x + y + d) / 2
 * Use "d" from the beginning:
 * max = (x + y + Math.abs(x - y)) / 2
 */
function maxOfTwoWithoutComparison(x, y) {
  return (x + y + Math.abs(x - y)) / 2;
}

function test(fn) {
  assert.deepStrictEqual(fn(0, 0), 0, fn.name);
  assert.deepStrictEqual(fn(0, 1), 1, fn.name);
  assert.deepStrictEqual(fn(1, 0), 1, fn.name);
  assert.deepStrictEqual(fn(4, 5), 5, fn.name);
  assert.deepStrictEqual(fn(100, 5), 100, fn.name);
}

test(maxOfTwoWithoutComparison);

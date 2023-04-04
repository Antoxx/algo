import assert from 'assert';

/**
 * 342. Power of Four
 *
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 * An integer n is a power of four, if there exists an integer x such that n == 4**x.
 *
 * https://leetcode.com/problems/power-of-four/
 *
 * errored decision for 2 and 8: n > 0 && 4 ** 26 % n === 0;
 */

function isPowerOfFourRadix(n) {
  return /^10*$/.test(n.toString(4));
}

function isPowerOfFourBitwise(n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
}

/**
 * x = 4 ** a
 * x = 2 ** (2*a)
 * log2(x) = 2a
 * log2(x) must be even
 */
function isPowerOfFourLog(n) {
  return n > 0 && Math.log2(n) % 2 === 0;
}

function isPowerOfFourLog4(n) {
  return Number.isInteger(Math.log(n) / Math.log(4));
}

function test(fn) {
  assert.deepStrictEqual(fn(16), true, fn.name);
  assert.deepStrictEqual(fn(5), false, fn.name);
  assert.deepStrictEqual(fn(1), true, fn.name);
  assert.deepStrictEqual(fn(2), false, fn.name);
  assert.deepStrictEqual(fn(8), false, fn.name);
}

test(isPowerOfFourRadix);
test(isPowerOfFourBitwise);
test(isPowerOfFourLog);
test(isPowerOfFourLog4);

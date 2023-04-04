import assert from 'assert';

/**
 * 231. Power of Two
 *
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2**x.
 *
 * https://leetcode.com/problems/power-of-two/
 */

function isPowerOfTwoUp(n) {
  if (n === 1) {
    return true;
  }

  let x = 0;
  let num = 0;
  while ((num = 2 << x) < n && num > 0) {
    x++;
  }

  return num === n;
}

function isPowerOfTwoDown(n) {
  while (n > 1) {
    n /= 2;
  }

  return n === 1;
}

function isPowerOfTwoPow(n) {
  let x = 0;
  while (2 ** x < n) {
    x++;
  }
  return 2 ** x === n;
}

// 8 = 1000
// 7 = 0111
// 8 & 7 = 0
function isPowerOfTwoSimple(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

function isPowerOfTwoSimple2(n) {
  return Math.log2(n) % 1 === 0;
}

function test(fn) {
  assert.deepStrictEqual(fn(1), true, fn.name);
  assert.deepStrictEqual(fn(16), true, fn.name);
  assert.deepStrictEqual(fn(3), false, fn.name);
  assert.deepStrictEqual(fn(1073741825), false, fn.name);
}

test(isPowerOfTwoUp);
test(isPowerOfTwoDown);
test(isPowerOfTwoPow);
test(isPowerOfTwoSimple);
test(isPowerOfTwoSimple2);

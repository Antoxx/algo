import assert from 'assert';

/**
 * 326. Power of Three
 *
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3**x.
 *
 *
 * https://leetcode.com/problems/power-of-three/
 */

function isPowerOfThreeCycle(n) {
  while (n > 1) {
    if (n % 3 === 0) {
      n /= 3;
    } else {
      return false;
    }
  }

  return n === 1;
}

// 3 ** 33 is biggest power of 3 which is smaller than Number.MAX_SAFE_INTEGER
function isPowerOfThreeModulo(n) {
  return n > 0 && 3 ** 33 % n === 0;
}

// if n was a power of 3, n.toString(3) would be 1, 10, 100, or 10...0 (9 = 100, 27 = 1000)
function isPowerOfThreeRadix3(n) {
  return /^10*$/.test(n.toString(3));
}

function isPowerOfThreeLog(n) {
  return 3 ** parseInt(Math.log(n) / Math.log(3)) === n;
}

function test(fn) {
  assert.deepStrictEqual(fn(27), true, fn.name);
  assert.deepStrictEqual(fn(0), false, fn.name);
  assert.deepStrictEqual(fn(-1), false, fn.name);
}

test(isPowerOfThreeCycle);
test(isPowerOfThreeModulo);
test(isPowerOfThreeRadix3);
test(isPowerOfThreeLog);

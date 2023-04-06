import assert from 'assert';

/**
 * 69. Sqrt(x)
 *
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 *
 * https://leetcode.com/problems/sqrtx/
 */

function mySqrt(x) {
  let sqrt = 1;
  while (sqrt * sqrt <= x) {
    sqrt++;
  }
  return sqrt - 1;
}

function mySqrtMiddle(x) {
  if (x < 2) {
    return x;
  }

  let ans = 0;
  let start = 1;
  let end = x / 2;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let power2 = mid * mid;

    if (power2 === x) {
      return mid;
    } else if (power2 < x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(4), 2, fn.name);
  assert.deepStrictEqual(fn(8), 2, fn.name);
}

test(mySqrt);
test(mySqrtMiddle);

import assert from 'assert';

/**
 * 29. Divide Two Integers
 *
 * Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
 * The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8,
 * and -2.7335 would be truncated to -2.
 * Return the quotient after dividing dividend by divisor.
 * Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
 *
 * https://leetcode.com/problems/divide-two-integers/
 */

function divide(dividend, divisor) {
  const negative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);

  let divd = Math.abs(dividend);
  let div = Math.abs(divisor);

  let num = div;
  let ans = 0;
  while (divd >= num) {
    num += div;
    ans++;
  }

  if (negative) {
    ans = -ans;
  }

  if (ans > 2 ** 31 - 1) {
    ans = 2 ** 31 - 1;
  } else if (ans < -(2 ** 31)) {
    ans = -(2 ** 31);
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(10, 3), 3, fn.name);
  assert.deepStrictEqual(fn(7, -3), -2, fn.name);
  assert.deepStrictEqual(fn(1, 1), 1, fn.name);
  assert.deepStrictEqual(fn(-1, -1), 1, fn.name);
  assert.deepStrictEqual(fn(-2147483648, -1), 2147483647, fn.name);
  assert.deepStrictEqual(fn(-2147483648, 1), -2147483648, fn.name);
}

test(divide);

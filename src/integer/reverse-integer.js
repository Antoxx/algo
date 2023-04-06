import assert from 'assert';

/**
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2**31, 2**31 - 1], then return 0.
 *
 * https://leetcode.com/problems/reverse-integer/
 */

function reverse(x) {
  let reversed = 0;
  while (x) {
    reversed = reversed * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return reversed < -(2 ** 31) || reversed > 2 ** 31 - 1 ? 0 : reversed;
}

function test(fn) {
  assert.deepStrictEqual(fn(123), 321, fn.name);
  assert.deepStrictEqual(fn(120), 21, fn.name);
  assert.deepStrictEqual(fn(-123), -321, fn.name);
  assert.deepStrictEqual(fn(1534236469), 0, fn.name);
}

test(reverse);

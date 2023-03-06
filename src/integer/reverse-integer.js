import assert from 'assert';

/**
 * Reverse Integer
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

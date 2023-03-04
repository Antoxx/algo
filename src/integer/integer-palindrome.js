import assert from 'assert';

/**
 * https://leetcode.com/problems/palindrome-number/
 *
 * Palindromes are 12321, 121, 11
 */

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  if (x >= 0 && x < 10) {
    return true;
  }

  let temp = x;
  let reversed = 0;
  while (temp) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return x === reversed;
}

function test(fn) {
  assert.deepStrictEqual(fn(-5), false, fn.name);
  assert.deepStrictEqual(fn(0), true, fn.name);
  assert.deepStrictEqual(fn(5), true, fn.name);
  assert.deepStrictEqual(fn(11), true, fn.name);
  assert.deepStrictEqual(fn(12), false, fn.name);
  assert.deepStrictEqual(fn(121), true, fn.name);
  assert.deepStrictEqual(fn(11211), true, fn.name);
  assert.deepStrictEqual(fn(1234), false, fn.name);
}

test(isPalindrome);

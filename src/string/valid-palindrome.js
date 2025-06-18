import assert from 'assert';

/**
 * 125. Valid Palindrome
 *
 * Easy
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * https://leetcode.com/problems/valid-palindrome/
 */

function isPalindrome(str) {
  let cnt = str.length;
  if (cnt <= 1) {
    return true;
  }

  let left = 0;
  let right = cnt - 1;
  const correctSymbol = /[a-z0-9]/;

  while (left < right) {
    const leftChar = str[left].toLowerCase();
    const rightChar = str[right].toLowerCase();

    if (!leftChar.match(correctSymbol)) {
      left++;
      continue;
    }

    if (!rightChar.match(correctSymbol)) {
      right--;
      continue;
    }

    if (leftChar !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn(''), true, fn.name);
  assert.deepStrictEqual(fn(' '), true, fn.name);
  assert.deepStrictEqual(fn('A man, a plan, a canal: Panama'), true, fn.name);
}

test(isPalindrome);

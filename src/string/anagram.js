import assert from 'assert';

/**
 * 242. Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * https://leetcode.com/problems/valid-anagram/
 */

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (const char of t) {
    if (!hash[char] || hash[char] === 0) {
      return false;
    }

    hash[char]--;
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn('пила', 'липа'), true, fn.name);
  assert.deepStrictEqual(fn('пост', 'стоп'), true, fn.name);
  assert.deepStrictEqual(fn('abcd', 'dcaB'), false, fn.name);
  assert.deepStrictEqual(fn('abcd', 'mnmn'), false, fn.name);
  assert.deepStrictEqual(fn('abc', 'aabbcc'), false, fn.name);
  assert.deepStrictEqual(fn('aacc', 'ccac'), false, fn.name);
}

test(isAnagram);

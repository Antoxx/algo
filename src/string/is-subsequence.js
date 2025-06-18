import assert from 'assert';

/**
 * 392. Is Subsequence
 *
 * Easy
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters
 * without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * s and t consist only of lowercase English letters.
 *
 * https://leetcode.com/problems/is-subsequence/
 */

function isSubsequence(s, t) {
  const lnS = s.length;
  const lnT = t.length;
  if (lnS === 0) {
    return true;
  }

  let sIdx = 0;
  for (let i = 0; i < lnT; i++) {
    if (s[sIdx] === t[i]) {
      if (sIdx === lnS - 1) {
        return true;
      }

      sIdx++;
    }
  }

  return false;
}

function test(fn) {
  assert.deepStrictEqual(fn('abc', 'ahbgdc'), true, fn.name);
  assert.deepStrictEqual(fn('axc', 'ahbgdc'), false, fn.name);
}

test(isSubsequence);

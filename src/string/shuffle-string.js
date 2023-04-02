import assert from 'assert';

/**
 * 1528. Shuffle String
 *
 * You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * Return the shuffled string.
 *
 * https://leetcode.com/problems/shuffle-string/
 */

function restoreString(s, indices) {
  const strArr = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    strArr[indices[i]] = s[i];
  }
  return strArr.join('');
}

function test(fn) {
  assert.deepStrictEqual(fn('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]), 'leetcode', fn.name);
  assert.deepStrictEqual(fn('abc', [0, 1, 2]), 'abc', fn.name);
}

test(restoreString);

import assert from 'assert';

/**
 * 14. Longest Common Prefix
 *
 * Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs) {
  let prefix = '';
  const cnt = strs.length;
  const word = strs[0];

  for (let cIdx = 0; cIdx < word.length; cIdx++) {
    for (let wIdx = 1; wIdx < cnt; wIdx++) {
      const char = strs[wIdx][cIdx];
      if (!char || char !== word[cIdx]) {
        return prefix;
      }
    }

    prefix += word[cIdx];
  }

  return prefix;
}

function test(fn) {
  assert.deepStrictEqual(fn(['flower', 'flow', 'flight']), 'fl', fn.name);
  assert.deepStrictEqual(fn(['dog', 'racecar', 'car']), '', fn.name);
}

test(longestCommonPrefix);

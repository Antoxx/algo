import assert from 'assert';

/**
 * Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

function lengthOfLongestSubstring(s) {
  let ans = 0;
  let left = 0;
  let hash = new Set();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    while (hash.has(char)) {
      hash.delete(s[left]);
      left++;
    }

    hash.add(char);
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn('abcde'), 5, fn.name);
  assert.deepStrictEqual(fn('abcabcbb'), 3, fn.name);
  assert.deepStrictEqual(fn('bbbbb'), 1, fn.name);
  assert.deepStrictEqual(fn('pwwkew'), 3, fn.name);
}

test(lengthOfLongestSubstring);

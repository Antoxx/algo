import assert from 'assert';

/**
 * Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

function longestPalindrome(s) {
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (s[left] === s[right + 1]) {
      right++;
    }

    while (s[left - 1] && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }

    if (right - left > maxRight - maxLeft) {
      maxLeft = left;
      maxRight = right;
    }
  }

  return s.slice(maxLeft, maxRight + 1);
}

function test(fn) {
  assert.deepStrictEqual(fn('a'), 'a', fn.name);
  assert.deepStrictEqual(fn('abbc'), 'bb', fn.name);
  assert.deepStrictEqual(fn('babad'), 'bab', fn.name);
  assert.deepStrictEqual(fn('cbbd'), 'bb', fn.name);
}

test(longestPalindrome);

import assert from 'assert';

/**
 * 409. Longest Palindrome
 *
 * Easy
 *
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * https://leetcode.com/problems/longest-palindrome/
 */

function longestPalindrome(str) {
  let hash = {};
  let ans = 0;

  for (let char of str) {
    if (hash.hasOwnProperty(char)) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }

    if (hash[char] % 2 === 0) {
      ans += 2;
    }
  }

  return str.length > ans ? ans + 1 : ans;
}

function test(fn) {
  assert.deepStrictEqual(fn('abccccdd'), 7, fn.name);
  assert.deepStrictEqual(fn('a'), 1, fn.name);
}

test(longestPalindrome);

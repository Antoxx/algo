import assert from 'assert';

/**
 * 387. First Unique Character in a String
 *
 * Easy
 *
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

function firstUniqChar(s) {
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hash.has(char)) {
      hash.set(char, -1);
    } else {
      hash.set(char, i);
    }
  }

  for (let idx of hash.values()) {
    if (idx !== -1) {
      return idx;
    }
  }

  return -1;
}

function test(fn) {
  assert.deepStrictEqual(fn('leetcode'), 0, fn.name);
  assert.deepStrictEqual(fn('loveleetcode'), 2, fn.name);
  assert.deepStrictEqual(fn('aabb'), -1, fn.name);
}

test(firstUniqChar);

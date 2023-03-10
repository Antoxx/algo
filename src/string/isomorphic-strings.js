import assert from 'assert';

/**
 * 205. Isomorphic Strings
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 * https://leetcode.com/problems/isomorphic-strings/
 */

function isIsomorphic(s, t) {
  const hash = new Map();
  let char;

  for (let i = 0; i < s.length; i++) {
    char = s[i];

    if (hash.has(char)) {
      if (hash.get(char) !== t[i]) {
        return false;
      }
    } else {
      hash.set(char, t[i]);
    }
  }

  return new Set([...hash.values()]).size == hash.size;
}

function test(fn) {
  assert.deepStrictEqual(fn('egg', 'add'), true, fn.name);
  assert.deepStrictEqual(fn('foo', 'bar'), false, fn.name);
  assert.deepStrictEqual(fn('paper', 'title'), true, fn.name);
  assert.deepStrictEqual(fn('badc', 'baba'), false, fn.name);
}

test(isIsomorphic);

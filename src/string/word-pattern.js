import assert from 'assert';

/**
 * 290. Word Pattern
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * https://leetcode.com/problems/word-pattern/
 */

function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }

  const hash = {};
  const usedWordsHash = {};

  for (let i = 0; i < pattern.length; i++) {
    if (Object.hasOwn(hash, pattern[i])) {
      if (hash[pattern[i]] !== words[i]) {
        return false;
      }
    } else {
      if (Object.hasOwn(usedWordsHash, words[i])) {
        return false;
      }

      hash[pattern[i]] = words[i];
      usedWordsHash[words[i]] = true;
    }
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn('abba', 'dog cat cat dog'), true, fn.name);
  assert.deepStrictEqual(fn('abba', 'dog cat cat fish'), false, fn.name);
  assert.deepStrictEqual(fn('abba', 'dog dog dog dog'), false, fn.name);
  assert.deepStrictEqual(fn('aaaa', 'dog cat cat dog'), false, fn.name);
  assert.deepStrictEqual(fn('aaa', 'aa aa aa aa'), false, fn.name);
}

test(wordPattern);

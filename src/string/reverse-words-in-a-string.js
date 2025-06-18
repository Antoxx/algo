import assert from 'assert';

/**
 * 151. Reverse Words in a String
 *
 * Medium
 *
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
 *
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

function reverseWords(str) {
  let i = str.length - 1;
  let words = [];
  let wordEnd = null;

  while (i >= 0) {
    if (str[i] === ' ') {
      if (wordEnd !== null) {
        words.push([i + 1, wordEnd]);
        wordEnd = null;
      }
    } else if (wordEnd === null) {
      wordEnd = i;
    }

    i--;
  }

  if (wordEnd !== null) {
    words.push([0, wordEnd]);
  }

  let ans = [];
  for (const [start, end] of words) {
    ans.push(str.slice(start, end + 1));
  }

  return ans.join(' ');
}

function reverseWordsSimple(str) {
  return str
    .split(' ')
    .map((s) => s.trim())
    .filter(Boolean)
    .reverse()
    .join(' ');
}

function test(fn) {
  assert.deepStrictEqual(fn('the sky is blue'), 'blue is sky the', fn.name);
  assert.deepStrictEqual(fn('  hello world  '), 'world hello', fn.name);
  assert.deepStrictEqual(fn('a good   example'), 'example good a', fn.name);
}

test(reverseWords);
test(reverseWordsSimple);

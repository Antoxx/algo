import assert from 'assert';

/**
 * 58. Length of Last Word
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 *
 * https://leetcode.com/problems/length-of-last-word/
 */

function lengthOfLastWord(s) {
  const ns = s.trimRight();
  const ln = ns.length;
  const lastSpaceIdx = ns.lastIndexOf(' ');
  if (lastSpaceIdx === -1) {
    return ns.length;
  } else {
    return ln - lastSpaceIdx - 1;
  }
}

function lengthOfLastWordNoTrim(s) {
  let ln = s.length;
  let end = null;
  let start = null;
  while (ln--) {
    if (s[ln] !== ' ' && end === null) {
      end = ln;
    }

    if (s[ln] === ' ' && end !== null) {
      start = ln;
      break;
    }
  }

  return end - start + (start > 0 ? 0 : start === null ? 1 : 0);
}

function lengthOfLastWordNoTrimSimpler(s) {
  let lastPos = -1

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]
    if (char === ' ') {
      if (lastPos !== -1) {
        return lastPos - i
      }
    } else if (lastPos === -1) {
      lastPos = i
    }
  }

  return lastPos === -1 ? s.length : lastPos + 1
}

function lengthOfLastWordShortest(s) {
  return s.split(' ').filter(Boolean).at(-1).length
}

function test(fn) {
  assert.deepStrictEqual(fn('World'), 5, fn.name);
  assert.deepStrictEqual(fn('Hello World'), 5, fn.name);
  assert.deepStrictEqual(fn('   fly me   to   the moon  '), 4, fn.name);
  assert.deepStrictEqual(fn('a '), 1, fn.name);
  assert.deepStrictEqual(fn(' a'), 1, fn.name);
}

test(lengthOfLastWord);
test(lengthOfLastWordNoTrim);
test(lengthOfLastWordNoTrimSimpler);
test(lengthOfLastWordShortest);

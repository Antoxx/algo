import assert from 'assert';

/**
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

function test(fn) {
  assert.deepStrictEqual(fn('World'), 5, fn.name);
  assert.deepStrictEqual(fn('Hello World'), 5, fn.name);
  assert.deepStrictEqual(fn('   fly me   to   the moon  '), 4, fn.name);
  assert.deepStrictEqual(fn('a '), 1, fn.name);
  assert.deepStrictEqual(fn(' a'), 1, fn.name);
}

test(lengthOfLastWord);
test(lengthOfLastWordNoTrim);

import assert from 'assert';

/**
 * 28. Find the Index of the First Occurrence in a String
 *
 * Easy
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */

function strStr(haystack, needle) {
  let firstIdx = -1;
  let nextIdx = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[nextIdx]) {
      if (firstIdx === -1) {
        firstIdx = i;
      }

      let currNeedleLn = i - firstIdx + 1;
      if (currNeedleLn === needle.length) {
        return firstIdx;
      }

      nextIdx++;
    } else {
      if (firstIdx !== -1) {
        i = firstIdx;
        firstIdx = -1;
      }

      nextIdx = 0;
    }
  }

  return -1;
}

function test(fn) {
  assert.deepStrictEqual(fn('sadbutsad', 'sad'), 0, fn.name);
  assert.deepStrictEqual(fn('leetcode', 'leeto'), -1, fn.name);
  assert.deepStrictEqual(fn('hello', 'll'), 2, fn.name);
  assert.deepStrictEqual(fn('mississippi', 'issip'), 4, fn.name);
  assert.deepStrictEqual(fn('mississippi', 'pi'), 9, fn.name);
}

test(strStr);

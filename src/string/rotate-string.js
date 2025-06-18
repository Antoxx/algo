import assert from 'assert';

/**
 * 796. Rotate String
 *
 * Easy
 *
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 *
 * https://leetcode.com/problems/rotate-string/
 */

function rotateString(s, goal) {
  let cnt = s.length;
  let s2 = s;
  while (cnt > 0) {
    s2 = s2.slice(1) + s2.slice(0, 1);
    if (s2 === goal) {
      return true;
    }

    cnt--;
  }

  return false;
}

function rotateStringRegex(s, goal) {
  return s.length === goal.length ? RegExp(goal).test(s + s) : false;
}

function test(fn) {
  assert.deepStrictEqual(fn('abcde', 'cdeab'), true, fn.name);
  assert.deepStrictEqual(fn('abcde', 'abced'), false, fn.name);
}

test(rotateString);
test(rotateStringRegex);

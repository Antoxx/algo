import assert from 'assert';

/**
 * 344. Reverse String
 *
 * Easy
 *
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * https://leetcode.com/problems/reverse-string/
 *
 * The entire logic for reversing a string is based on using the opposite directional two-pointer approach!
 */

function reverseString(chars) {
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];

    left++;
    right--;
  }

  return chars;
}

function test(fn) {
  assert.deepStrictEqual(fn(['h', 'e', 'l', 'l', 'o']), ['o', 'l', 'l', 'e', 'h'], fn.name);
  assert.deepStrictEqual(
    fn(['H', 'a', 'n', 'n', 'a', 'h']),
    ['h', 'a', 'n', 'n', 'a', 'H'],
    fn.name,
  );
}

test(reverseString);

import assert from 'assert';

/**
 * 179. Largest Number
 *
 * Medium
 *
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 * Since the result may be very large, so you need to return a string instead of an integer.
 *
 * https://leetcode.com/problems/largest-number/
 */

function largestNumber(nums) {
  const sorted = nums.toSorted((a, b) => `${b}${a}` - `${a}${b}`);
  return sorted[0] === 0 ? '0' : sorted.join('');
}

function test(fn) {
  assert.deepStrictEqual(fn([10, 2]), '210', fn.name);
  assert.deepStrictEqual(fn([3, 30, 34, 5, 9]), '9534330', fn.name);
}

test(largestNumber);

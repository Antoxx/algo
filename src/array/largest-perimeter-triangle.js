import assert from 'assert';

/**
 * 976. Largest Perimeter Triangle
 *
 * Easy
 *
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
 * If it is impossible to form any triangle of a non-zero area, return 0.
 *
 * https://leetcode.com/problems/largest-perimeter-triangle/
 */

function largestPerimeter(nums) {
  const sortedNums = [...nums].sort((a, b) => b - a);

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] < sortedNums[i + 1] + sortedNums[i + 2]) {
      return sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2];
    }
  }

  return 0;
}

function test(fn) {
  assert.deepStrictEqual(fn([2, 1, 2]), 5, fn.name);
  assert.deepStrictEqual(fn([1, 2, 1, 10]), 0, fn.name);
}

test(largestPerimeter);

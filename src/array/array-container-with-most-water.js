import assert from 'assert';

/**
 * Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/
 */

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 1]), 1, fn.name);
  assert.deepStrictEqual(fn([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49, fn.name);
}

test(maxArea);

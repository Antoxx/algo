import assert from 'assert';

/**
 * 53. Maximum Subarray
 *
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 *
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Use Jay Kadane's algorithm
 *
 */

function maxSubArray(nums) {
  let maxSum = nums[0];
  let curSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}

function maxSubArraySimple(nums) {
  let maxSum = nums[0];
  let curSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curSum += nums[i];
    maxSum = Math.max(maxSum, curSum);

    if (curSum < 0) {
      curSum = 0;
    }
  }

  return maxSum;
}

function test(fn) {
  assert.deepStrictEqual(fn([1]), 1, fn.name);
  assert.deepStrictEqual(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6, fn.name);
  assert.deepStrictEqual(fn([5, 4, -1, 7, 8]), 23, fn.name);
}

test(maxSubArray);
test(maxSubArraySimple);

/**
 * 15. 3Sum
 *
 * Medium
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * https://leetcode.com/problems/3sum/
 *
 * So, we essentially need to find three numbers x, y, and z such that they add up to the given value. If we fix one of the numbers say x, we are left with the two-sum problem at hand!
 *
 * For the two-sum problem, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y, which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?
 *
 * The second train of thought for two-sum is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?
 *
 */

import assert from 'assert';

function threeSumBruteForce(nums) {
  const ans = new Map();
  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          const res = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          ans.set(res.toString(), res);
        }
      }
    }
  }

  return [...ans.values()];
}

function threeSum(nums) {
  const ans = new Map();
  const map = new Map();
  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let want = target - nums[i] - nums[j];

      if (map.has(want)) {
        const res = [want, nums[i], nums[j]].sort((a, b) => a - b);
        ans.set(res.toString(), res);
      }
    }

    map.set(nums[i], i);
  }

  return [...ans.values()];
}

function test(fn) {
  assert.deepStrictEqual(
    fn([-1, 0, 1, 2, -1, -4]),
    [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
    fn.name,
  );
  assert.deepStrictEqual(fn([0, 1, 1]), [], fn.name);
  assert.deepStrictEqual(fn([0, 0, 0]), [[0, 0, 0]], fn.name);
}

test(threeSumBruteForce);
test(threeSum);

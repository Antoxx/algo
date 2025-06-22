/**
 * 485. Max Consecutive Ones
 *
 * Easy
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * https://leetcode.com/problems/max-consecutive-ones/
 */

import assert from 'assert';

function findMaxConsecutiveOnesCounter(nums) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;

      if (current > max) {
        max = current;
      }

      continue;
    }

    current = 0;
  }

  return max;
}

function findMaxConsecutiveOnesPosition(nums) {
  let max = 0
  let pos = -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (pos === -1) {
        pos = i
      }

      continue
    }

    max = Math.max(max, i - pos)
    pos = -1
  }

  if (pos !== -1) {
    max = Math.max(max, nums.length - pos)
  }

  return max
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 1, 0, 1, 1, 1]), 3, fn.name);
  assert.deepStrictEqual(fn([1, 0, 1, 1, 0, 1]), 2, fn.name);
}

test(findMaxConsecutiveOnesCounter);
test(findMaxConsecutiveOnesPosition);

/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */

import assert from 'assert';

function findMaxConsecutiveOnes(nums) {
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

function test(fn) {
  assert.deepStrictEqual(fn([1, 1, 0, 1, 1, 1]), 3, fn.name);
  assert.deepStrictEqual(fn([1, 0, 1, 1, 0, 1]), 2, fn.name);
}

test(findMaxConsecutiveOnes);

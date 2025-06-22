/**
 * 27. Remove Element
 *
 * Easy
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The relative order of the elements may be changed.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * https://leetcode.com/problems/remove-element/
 */

import assert from 'assert';

function removeElementSplice(nums, val) {
  let idx = null;

  while ((idx = nums.indexOf(val)) !== -1) {
    nums.splice(idx, 1);
  }

  return nums.length;
}

function removeElementMoving(nums, val) {
  let idx = 0;

  for (let num of nums) {
    if (num !== val) {
      nums[idx] = num;
      idx++;
    }
  }

  nums.length = idx + 1;
  return idx;
}

function test(fn) {
  assert.deepStrictEqual(fn([], 1), 0, fn.name);
  assert.deepStrictEqual(fn([1, 1], 1), 0, fn.name);
  assert.deepStrictEqual(fn([1, 1, 2], 1), 1, fn.name);
  assert.deepStrictEqual(fn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 3), 8, fn.name);
}

test(removeElementSplice);
test(removeElementMoving);

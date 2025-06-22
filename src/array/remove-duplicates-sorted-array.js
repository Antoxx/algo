/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Easy
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part
 * of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold
 * the final result. It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

import assert from 'assert';

function removeDuplicates(nums) {
  let i = 1;
  let prev = nums[0];

  while (nums[i] !== undefined) {
    if (prev !== undefined && prev === nums[i]) {
      nums.splice(i, 1);
    } else {
      prev = nums[i];
      i++;
    }
  }

  return nums.length;
}

function removeDuplicatesMoving(nums) {
  let j = 1;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (prev !== nums[i]) {
      prev = nums[i];
      nums[j] = nums[i];
      j++;
    }
  }

  nums.length = j;

  return nums.length;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 1, 2]), 2, fn.name);
  assert.deepStrictEqual(fn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5, fn.name);
}

test(removeDuplicates);
test(removeDuplicatesMoving);

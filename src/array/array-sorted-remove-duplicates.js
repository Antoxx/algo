/**
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

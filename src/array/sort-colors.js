import assert from 'assert';

/**
 * 75. Sort Colors
 *
 * Medium
 *
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
 * respectively.
 * You must solve this problem without using the library's sort function.
 *
 * https://leetcode.com/problems/sort-colors/
 *
 * A rather straight forward solution is a two-pass algorithm using counting sort.
 * Iterate the array counting number of 0's, 1's, and 2's.
 * Overwrite array with the total number of 0's, then 1's and followed by 2's.
 */

function sortColors(nums) {
  const ln = nums.length;
  let cnt0 = 0;
  let cnt1 = 0;

  for (let num of nums) {
    if (num === 0) {
      cnt0++;
    } else if (num === 1) {
      cnt1++;
    }
  }

  for (let i = 0; i < ln; i++) {
    if (i < cnt0) {
      nums[i] = 0;
    } else if (i < cnt0 + cnt1) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }

  return nums;
}

function test(fn) {
  assert.deepStrictEqual(fn([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2], fn.name);
  assert.deepStrictEqual(fn([2, 0, 1]), [0, 1, 2], fn.name);
}

test(sortColors);

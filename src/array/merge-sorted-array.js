import assert from 'assert';

/**
 * 88. Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * https://leetcode.com/problems/merge-sorted-array/
 */

function mergeSortedArray(nums1, m, nums2, n) {
  let insertIdx = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[insertIdx] = nums1[i];
      i--;
    } else {
      nums1[insertIdx] = nums2[j];
      j--;
    }

    insertIdx--;
  }

  return nums1;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6], fn.name);
  assert.deepStrictEqual(fn([1], 1, [], 0), [1], fn.name);
  assert.deepStrictEqual(fn([0], 0, [1], 1), [1], fn.name);
}

test(mergeSortedArray);

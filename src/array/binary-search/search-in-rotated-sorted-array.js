import assert from 'assert';

/**
 * 33. Search in Rotated Sorted Array
 *
 * Medium
 *
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
 * such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
 * or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

function search(nums, target) {
  const ln = nums.length;
  let left = 0;
  let right = ln - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      // left side sorted
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right side sorted
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

function test(fn) {
  assert.deepStrictEqual(fn([4, 5, 6, 7, 0, 1, 2], 0), 4, fn.name);
  assert.deepStrictEqual(fn([4, 5, 6, 7, 0, 1, 2], 3), -1, fn.name);
  assert.deepStrictEqual(fn([1], 0), -1, fn.name);
  assert.deepStrictEqual(fn([1, 3], 3), 1, fn.name);
}

test(search);

// function search(nums, target) {
//   const ln = nums.length;
//   let left = 0;
//   let right = ln - 1;
//   let mid;

//   while (left < right) {
//     mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     }

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   let pivot = left;
//   if (nums[pivot] < target) {
//     left = 0;
//     right = pivot - 1;
//   } else {
//     left = pivot;
//     right = ln - 1;
//   }

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     }

//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }

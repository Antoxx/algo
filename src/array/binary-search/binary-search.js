import assert from 'assert';

/**
 * 704. Binary Search
 *
 * Easy
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * https://leetcode.com/problems/binary-search/
 */

// left binary search
function arrayBinarySearchLeft(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= search) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return arr[right] === search ? right : -1;
}

function arrayBinarySearchSimple(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  return -1
}

function arrayBinarySearch(nums, target) {
  let ln = nums.length
  let left = 0;
  let right = ln - 1;
  let pos = -1;
  let mid;

  if (target < nums[left] || target > nums[right]) {
    return -1;
  }

  if (ln === 1 && nums[0] === target) {
    return 0;
  }

  while (left < right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }

    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return pos;
}

function arrayBinarySearchRecursive(nums, target, start = 0, end = nums.length - 1) {
  if (nums.length === 0 || nums[start] > target || nums[end] < target) {
    return -1;
  }

  const midIdx = Math.floor((start + end) / 2);

  if (nums[midIdx] === target) {
    return midIdx;
  } else if (nums[midIdx] < target) {
    return arrayBinarySearchRecursive(nums, target, midIdx + 1, end);
  } else if (nums[midIdx] > target) {
    return arrayBinarySearchRecursive(nums, target, start, midIdx - 1);
  }

  return -1
}

function test(fn) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  assert.deepStrictEqual(fn(nums, 7), 7, fn.name);
  assert.deepStrictEqual(fn(nums, 0), 0, fn.name);
  assert.deepStrictEqual(fn(nums, 15), 15, fn.name);
  assert.deepStrictEqual(fn(nums, 13), 13, fn.name);
  assert.deepStrictEqual(fn(nums, 16), -1, fn.name);

  assert.deepStrictEqual(fn([], 1), -1, fn.name);
  assert.deepStrictEqual(fn([0], 0), 0, fn.name);
  assert.deepStrictEqual(fn([0], 1), -1, fn.name);
  assert.deepStrictEqual(fn([1, 2], 1), 0, fn.name);
  assert.deepStrictEqual(fn([1, 2], 15), -1, fn.name);

  assert.deepStrictEqual(fn([-1,0,3,5,9,12], 2), -1, fn.name);
}

test(arrayBinarySearchLeft);
test(arrayBinarySearchSimple);
test(arrayBinarySearch);
test(arrayBinarySearchRecursive);

import assert from 'assert';

/**
 * 704. Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * https://leetcode.com/problems/binary-search/
 */

// left binary search
function arrayBinarySearchSimple(arr, search) {
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

function arrayBinarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  let pos = -1;
  let mid;

  if (search < arr[left] || search > arr[right]) {
    return -1;
  }

  while (left <= right) {
    if (arr[left] === search) {
      return left;
    }
    if (arr[right] === search) {
      return right;
    }

    mid = Math.floor((left + right) / 2);
    if (arr[mid] === search) {
      return mid;
    }

    if (arr[mid] < search) {
      left = mid + 1;
    }

    if (arr[mid] > search) {
      right = mid - 1;
    }
  }

  return pos;
}

function arrayBinarySearchRecursive(arr, search, start = 0, end = arr.length - 1) {
  if (arr.length === 0 || arr[start] > search || arr[end] < search) {
    return -1;
  }

  const midIdx = Math.floor((start + end) / 2);
  if (arr[midIdx] === search) {
    return midIdx;
  }

  if (arr[midIdx] < search) {
    return arrayBinarySearchRecursive(arr, search, midIdx + 1, end);
  }

  if (arr[midIdx] > search) {
    return arrayBinarySearchRecursive(arr, search, start, midIdx - 1);
  }
}

function test(fn) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  assert.deepStrictEqual(fn(arr, 7), 7, fn.name);
  assert.deepStrictEqual(fn(arr, 0), 0, fn.name);
  assert.deepStrictEqual(fn(arr, 15), 15, fn.name);
  assert.deepStrictEqual(fn(arr, 13), 13, fn.name);
  assert.deepStrictEqual(fn(arr, 16), -1, fn.name);

  assert.deepStrictEqual(fn([], 1), -1, fn.name);
  assert.deepStrictEqual(fn([0], 0), 0, fn.name);
  assert.deepStrictEqual(fn([0], 1), -1, fn.name);
  assert.deepStrictEqual(fn([1, 2], 1), 0, fn.name);
  assert.deepStrictEqual(fn([1, 2], 15), -1, fn.name);
}

test(arrayBinarySearchSimple);
test(arrayBinarySearch);
test(arrayBinarySearchRecursive);

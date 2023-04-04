import assert from 'assert';

/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

function searchRange(nums, target) {
  function search(check) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (check(nums[mid])) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  const start = search((num) => num >= target);
  if (nums[start] !== target) {
    return [-1, -1];
  }

  let end = search((num) => num > target);
  if (nums[end] !== target) {
    end -= 1;
  }

  return [start, end];
}

function test(fn) {
  assert.deepStrictEqual(fn([5, 7, 7, 8, 8, 10], 8), [3, 4], fn.name);
  assert.deepStrictEqual(fn([5, 7, 7, 8, 8, 10], 7), [1, 2], fn.name);
  assert.deepStrictEqual(fn([5, 7, 7, 8, 8, 10], 5), [0, 0], fn.name);
  assert.deepStrictEqual(fn([5, 7, 7, 8, 8, 10], 10), [5, 5], fn.name);
  assert.deepStrictEqual(fn([5, 7, 7, 8, 8, 10], 6), [-1, -1], fn.name);
  assert.deepStrictEqual(fn([5, 5, 5], 5), [0, 2], fn.name);
  assert.deepStrictEqual(fn([], 0), [-1, -1], fn.name);
}

test(searchRange);

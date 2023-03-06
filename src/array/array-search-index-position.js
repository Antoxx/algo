import assert from 'assert';

/**
 * https://leetcode.com/problems/search-insert-position/
 */

function searchIndexPosition(nums, target) {
  let ln = nums.length;
  let left = 0;
  let right = ln - 1;

  while (left <= right) {
    if (nums[left] === target) {
      return left;
    }

    if (nums[right] === target) {
      return right;
    }

    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function test(fn) {
  const arr = [1, 3, 5, 6];

  assert.deepStrictEqual(fn(arr, 5), 2, fn.name);
  assert.deepStrictEqual(fn(arr, 2), 1, fn.name);
  assert.deepStrictEqual(fn(arr, 7), 4, fn.name);

  assert.deepStrictEqual(fn([1, 3, 5], 3), 1, fn.name);
}

test(searchIndexPosition);

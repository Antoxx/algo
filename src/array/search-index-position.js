import assert from 'assert';

/**
 * 35. Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 *
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

function searchIndexPositionSimple(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[right] >= target ? right : right + 1;
}

function test(fn) {
  const arr = [1, 3, 5, 6];

  assert.deepStrictEqual(fn(arr, 5), 2, fn.name);
  assert.deepStrictEqual(fn(arr, 2), 1, fn.name);
  assert.deepStrictEqual(fn(arr, 7), 4, fn.name);

  assert.deepStrictEqual(fn([1, 3, 5], 3), 1, fn.name);
}

test(searchIndexPosition);
test(searchIndexPositionSimple);

import assert from 'assert';

/**
 * !!!!!!! DOES NOT WORK ON BIG ARRAYS
 *
 * 912. Sort an Array
 *
 * Given an array of integers nums, sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
 *
 * https://leetcode.com/problems/sort-an-array/
 */

function arrayQuickSortMinMemory(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  function part(start, end) {
    const pivot = nums[end];
    let less = start;

    for (let i = start; i < end; i++) {
      if (nums[i] <= pivot) {
        if (i !== less) {
          [nums[i], nums[less]] = [nums[less], nums[i]];
        }

        less++;
      }
    }

    [nums[end], nums[less]] = [nums[less], nums[end]];
    return less;
  }

  function sort(start, end) {
    if (start < end) {
      const p = part(start, end);
      sort(start, p - 1);
      sort(p + 1, end);
    }
  }

  sort(0, nums.length - 1);

  return nums;
}

function test(fn) {
  const arr = Array(5)
    .fill(1)
    .map(() => (Math.random() * 100) | 0);

  const sortedArr = [...arr].sort((a, b) => a - b);

  assert.deepStrictEqual(fn([]), [], fn.name);
  assert.deepStrictEqual(fn([1]), [1], fn.name);
  assert.deepStrictEqual(fn([1, 2]), [1, 2], fn.name);
  assert.deepStrictEqual(fn([2, 1]), [1, 2], fn.name);
  assert.deepStrictEqual(fn([3, 2, 1]), [1, 2, 3], fn.name);
  assert.deepStrictEqual(fn([4, 5, 3, 7, 6]), [3, 4, 5, 6, 7], fn.name);
  assert.deepStrictEqual(fn([3, 5, 1]), [1, 3, 5], fn.name);
  assert.deepStrictEqual(fn([1, 5, 10]), [1, 5, 10], fn.name);
  assert.deepStrictEqual(
    fn([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]),
    [-7, -5, -4, -1, -1, 0, 0, 4, 7, 9],
    fn.name,
  );

  assert.deepStrictEqual(fn(arr), sortedArr, fn.name);
}

test(arrayQuickSortMinMemory);

import assert from 'assert';

/**
 * Дана отсортированная последовательность чисел длиной N и число K.
 * Необходимо найти количество пар чисел А, В, таких что В - А > K
 */

function countPairs(nums, k) {
  const ln = nums.length;
  let ans = 0;
  let right = 0;

  for (let left = 0; left < ln; left++) {
    while (right < ln && nums[right] - nums[left] <= k) {
      right++;
    }

    ans += ln - right;
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 3, 5, 7, 8], 4), 3, fn.name);
}

test(countPairs);

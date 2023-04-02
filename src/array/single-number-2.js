import assert from 'assert';

/**
 * 137. Single Number II
 *
 * Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * https://leetcode.com/problems/single-number-ii/
 *
 * https://leetcode.com/problems/single-number-ii/solutions/700038/javascript-bitwise-solution-with-explanation/
 */

function singleNumber(nums) {
  const hash = {};
  for (const num of nums) {
    if (Object.hasOwn(hash, num)) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  for (const num in hash) {
    if (Object.hasOwn(hash, num) && hash[num] === 1) {
      return Number(num);
    }
  }
}

function test(fn) {
  assert.deepStrictEqual(fn([2, 2, 3, 2]), 3, fn.name);
  assert.deepStrictEqual(fn([0, 1, 0, 1, 0, 1, 99]), 99, fn.name);
}

test(singleNumber);

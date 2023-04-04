import assert from 'assert';

/**
 * 136. Single Number
 *
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * https://leetcode.com/problems/single-number/
 */

function singleNumber(nums) {
  const hash = {};

  for (const num of nums) {
    if (Object.hasOwn(hash, num)) {
      hash[num] = !hash[num];
    } else {
      hash[num] = false;
    }
  }

  for (let num in hash) {
    if (Object.hasOwn(hash, num) && !hash[num]) {
      return Number(num);
    }
  }
}

function singleNumberSimple(nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
}

function test(fn) {
  assert.deepStrictEqual(fn([2, 2, 1]), 1, fn.name);
  assert.deepStrictEqual(fn([4, 1, 2, 1, 2]), 4, fn.name);
  assert.deepStrictEqual(fn([1]), 1, fn.name);
}

test(singleNumber);
test(singleNumberSimple);

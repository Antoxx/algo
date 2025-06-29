/**
 * 1. Two Sum
 *
 * Easy
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * https://leetcode.com/problems/two-sum/
 *
 * Find indexes of two different integers in an array which sum is equal to N
 * [2,6,3,21] for N=5 gives [0,2]
 *
 * A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.
 *
 * So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?
 *
 * The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?
 *
 */

import assert from 'assert';

function twoSumBruteForce(nums, target) {
  let ticks = 0;
  const ln = nums.length;
  for (let i = 0; i < ln; i++) {
    ticks++;
    for (let j = i + 1; j < ln; j++) {
      ticks++;
      if (nums[i] + nums[j] === target) {
        console.log(`Ticks for brute force: ${ticks}`);
        return [i, j];
      }
    }
  }
  return null;
}

// suitable for UNSORTED array
function twoSumDiff(nums, target) {
  let ticks = 0;
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    ticks++;
    let diff = target - nums[i];
    if (hash.has(diff)) {
      console.log(`Ticks for diff + hash: ${ticks}`);
      return [hash.get(diff), i];
    }

    hash.set(nums[i], i);
  }
}

// suitable for SORTED array ONLY
function twoSumPointers(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let sum = 0;
  let ticks = 0;

  while (left < right) {
    ticks++;

    sum = nums[left] + nums[right];

    if (sum === target) {
      console.log(`Ticks for two pointers: ${ticks}`);
      return [left, right];
    } else {
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
}

function test(fn) {
  assert.deepStrictEqual(fn([3, 3], 6), [0, 1], fn.name);
  assert.deepStrictEqual(fn([2, 6, 3, 21], 5), [0, 2], fn.name);
  assert.deepStrictEqual(fn([2, 7, 11, 15], 17), [0, 3], fn.name);
  assert.deepStrictEqual(fn([2, 7, 11, 15], 18), [1, 2], fn.name);
  assert.deepStrictEqual(fn([2, 7, 11, 15], 26), [2, 3], fn.name);
  assert.deepStrictEqual(fn([2, 7, 11, 7], 14), [1, 3], fn.name);
  assert.deepStrictEqual(fn([1, -3, 4, 5], 9), [2, 3], fn.name);
}

test(twoSumBruteForce);
test(twoSumDiff);
test(twoSumPointers);

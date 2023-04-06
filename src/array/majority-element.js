import assert from 'assert';

/**
 * 169. Majority Element
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * https://leetcode.com/problems/majority-element/
 */

function majorityElement(nums) {
  let hash = new Map();
  let ln = nums.length;

  for (let num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }

    if (hash.get(num) > ln / 2) {
      return num;
    }
  }
}

function majorityElementSimple(nums) {
  let ans = 0;
  let cnt = 0;

  for (let num of nums) {
    if (cnt == 0) {
      ans = num;
    }

    if (num == ans) {
      cnt++;
    } else {
      cnt--;
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn([3, 2, 3]), 3, fn.name);
  assert.deepStrictEqual(fn([2, 2, 1, 1, 1, 2, 2, 0]), 2, fn.name);
}

test(majorityElement);
test(majorityElementSimple);

import assert from 'assert';

/**
 * 628. Maximum Product of Three Numbers
 *
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
 *
 * https://leetcode.com/problems/maximum-product-of-three-numbers/
 */

function maximumProduct(nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (const num of nums) {
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
}

function maximumProductSimple(nums) {
  nums.sort((a, b) => b - a);
  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums.at(-1) * nums.at(-2));
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 3]), 6, fn.name);
  assert.deepStrictEqual(fn([1, 2, 3, 4]), 24, fn.name);
  assert.deepStrictEqual(fn([-1, -2, -3]), -6, fn.name);
}

test(maximumProduct);
test(maximumProductSimple);

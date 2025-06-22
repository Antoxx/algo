import assert from 'assert';

/**
 * 1464. Maximum Product of Two Elements in an Array
 *
 * Easy
 *
 * Given the array of integers nums, you will choose two different indices i and j of that array.
 * Return the maximum value of (nums[i]-1)*(nums[j]-1).
 *
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 */

function maximumProduct(nums) {
  let max1 = 0;
  let max2 = 0;

  for (const num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return (max1 - 1) * (max2 - 1);
}

function maximumProductSimple(nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
}

function test(fn) {
  assert.deepStrictEqual(fn([3, 4, 5, 2]), 12, fn.name);
  assert.deepStrictEqual(fn([1, 5, 4, 5]), 16, fn.name);
  assert.deepStrictEqual(fn([3, 7]), 12, fn.name);
}

test(maximumProduct);
test(maximumProductSimple);

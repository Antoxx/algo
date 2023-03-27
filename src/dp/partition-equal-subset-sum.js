import assert from 'assert';

/**
 * 416. Partition Equal Subset Sum
 *
 * Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/
 *
 *             0  1  2  3 .. 5  6 .. 11
 * {}          1  0  0  0    0  0    0
 * {1}         1  1  0  0    0  0    0
 * {1,5}       1  1  0  0    1  1    0
 * {1,5,11}    1  1  0  0    1  1    1
 * {1,5,11,5}  1  1  0  0    1  1    1
 */

function canPartition(nums) {
  const sum = nums.reduce((acc, n) => acc + n, 0);
  if (sum % 2) {
    return false;
  }

  const halfSum = sum / 2;
  const dp = Array(halfSum + 1).fill(false);
  dp[0] = true;

  let tmpSum = 0;
  for (const num of nums) {
    tmpSum += num;
    for (let i = 1; i <= halfSum; i++) {
      if (i > tmpSum) {
        break;
      }

      dp[i] = dp[i] || dp[tmpSum - i];
    }
  }

  return dp[halfSum];
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2]), false, fn.name);
  assert.deepStrictEqual(fn([1, 2, 5]), false, fn.name);
  assert.deepStrictEqual(fn([1, 5, 11, 5]), true, fn.name);
  assert.deepStrictEqual(fn([1, 2, 3, 5]), false, fn.name);
}

test(canPartition);

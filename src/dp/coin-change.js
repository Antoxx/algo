import assert from 'assert';

/**
 * 322. Coin Change
 *
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * https://leetcode.com/problems/coin-change/
 */

function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      // min of:
      // 1. How many we needed from before (on previous coin)
      // 2. How many we need using current coin (1 + (amount - coin))
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 5], 11), 3, fn.name);
  assert.deepStrictEqual(fn([2], 3), -1, fn.name);
  assert.deepStrictEqual(fn([1], 0), 0, fn.name);
}

test(coinChange);

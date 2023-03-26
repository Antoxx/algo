import assert from 'assert';

/**
 * 518. Coin Change II
 *
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 *
 * Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * The answer is guaranteed to fit into a signed 32-bit integer.
 *
 * https://leetcode.com/problems/coin-change-ii/
 */

function coinChange(amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

function test(fn) {
  assert.deepStrictEqual(fn(5, [1, 2, 5]), 4, fn.name);
  assert.deepStrictEqual(fn(3, [2]), 0, fn.name);
  assert.deepStrictEqual(fn(10, [10]), 1, fn.name);
}

test(coinChange);

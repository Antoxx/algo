import assert from 'assert';

/**
 * 746. Min Cost Climbing Stairs
 *
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 *
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 */

function minCostClimbingStairs(prices) {
  const dp = [0];
  const n = prices.length;

  for (let i = 1; i <= n; i++) {
    const i1 = dp[i - 1] ?? Infinity;
    const i2 = dp[i - 2] ?? Infinity;

    dp[i] = Math.min(i1, i2) + prices[i - 1];
  }

  return Math.min(dp[n - 1], dp[n]);
}

function test(fn) {
  assert.deepStrictEqual(fn([10, 15, 20]), 15, fn.name);
  assert.deepStrictEqual(fn([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6, fn.name);
}

test(minCostClimbingStairs);

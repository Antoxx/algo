import assert from 'assert';

/**
 * 121. Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

function maxProfit(prices) {
  let maxProfit = 0;
  let left = 0;
  for (let right = 1; right < prices.length; right++) {
    const profit = prices[right] - prices[left];
    if (profit <= 0) {
      left = right;
    } else {
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

function maxProfit2(prices) {
  let min = prices[0];
  let max = 0;
  for (let price of prices) {
    if (min < price) {
      max = Math.max(max, price - min);
    } else {
      min = price;
    }
  }
  return max;
}

function maxProfit3(prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return maxProfit;
}

function test(fn) {
  assert.deepStrictEqual(fn([7, 1, 5, 3, 6, 4]), 5, fn.name);
  assert.deepStrictEqual(fn([7, 6, 4, 3, 1]), 0, fn.name);
  assert.deepStrictEqual(fn([2, 1, 2, 1, 0, 1, 2]), 2, fn.name);
  assert.deepStrictEqual(fn([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]), 9, fn.name);
}

test(maxProfit);
test(maxProfit2);
test(maxProfit3);

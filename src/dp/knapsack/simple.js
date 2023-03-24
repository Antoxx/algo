import assert from 'assert';

/**
 * Knapsack Problem and Dynamic Programming
 *
 * https://leetcode.com/discuss/study-guide/1152328/01-Knapsack-Problem-and-Dynamic-Programming
 *
 * https://neerc.ifmo.ru/wiki/index.php?title=%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B0_%D0%BE_%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA%D0%B5
 *
 */

function maxKnapsackCost(volume, things) {
  const num = things.length;
  let dp = [];

  // fill dp by 0s
  for (let i = 0; i <= num; i++) {
    dp.push(Array(volume + 1).fill(0));
  }

  // by things
  for (let i = 1; i <= num; i++) {
    const [weight, cost] = things[i - 1];

    // by knapsack volume
    for (let j = 1; j <= volume; j++) {
      // can be put into knapsack?
      if (weight <= j) {
        // include
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + cost);
      } else {
        // exclude
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[num][volume];
}

function test(fn) {
  assert.deepStrictEqual(
    fn(13, [
      [3, 1],
      [4, 6],
      [5, 4],
      [8, 7],
      [9, 6],
    ]),
    13,
    fn.name,
  );
}

test(maxKnapsackCost);

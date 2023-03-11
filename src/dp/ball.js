import assert from 'assert';

/**
 * На вершине лесенки, содержащей N ступенек, находится мячик, который начинает прыгать по ним вниз, к основанию.
 * Мячик может прыгнуть на следующую ступеньку, на ступеньку через одну или через 2.
 * (То есть, если мячик лежит на 8-ой ступеньке, то он может переместиться на 5-ую, 6-ую или 7-ую.)
 * Определить число всевозможных "маршрутов" мячика с вершины на землю.
 */

function findPossibleRoutes(n) {
  const dp = [1, 2, 4];

  for (let i = 3; i <= n; i++) {
    dp[i % 3] = dp[0] + dp[1] + dp[2];
  }

  return dp[(n - 1) % 3];
}

function test(fn) {
  assert.deepStrictEqual(fn(3), 4, fn.name);
  assert.deepStrictEqual(fn(5), 13, fn.name);
}

test(findPossibleRoutes);

import assert from 'assert';

/**
 * Мальчик подошел к платной лестнице. Чтобы наступить на любую ступеньку, нужно заплатить указанную на ней сумму.
 * Мальчик умеет перешагивать на следующую ступеньку, либо перепрыгивать через ступеньку.
 * Требуется узнать, какая наименьшая сумма понадобится мальчику, чтобы добраться до верхней ступеньки, и любой путь,
 * при котором такая сумма достигается.
 */

function findMinPathOnTollStairs(n, prices) {
  const dp = [0];
  const paths = [];

  for (let i = 1; i <= n; i++) {
    const i1 = dp[i - 1] ?? Infinity;
    const i2 = dp[i - 2] ?? Infinity;

    dp[i] = Math.min(i1, i2) + prices[i - 1];

    const prevStep = i1 < i2 ? i - 1 : i - 2;
    paths.push(prevStep);
  }

  const path = [n];
  let i = paths.length - 1;
  while (paths[i] > 0) {
    path.push(paths[i]);
    i = paths[i] - 1;
  }

  return { price: dp[n], path: path.reverse() };
}

function test(fn) {
  assert.deepStrictEqual(fn(2, [2, 5, 6, 1, 8]), { price: 5, path: [2] }, fn.name);
  assert.deepStrictEqual(fn(4, [2, 5, 6, 1, 8]), { price: 6, path: [2, 4] }, fn.name);
  assert.deepStrictEqual(fn(5, [2, 5, 6, 1, 8]), { price: 14, path: [2, 4, 5] }, fn.name);
}

test(findMinPathOnTollStairs);

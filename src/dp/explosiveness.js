import assert from 'assert';

/**
 * При переработке радиоактивных материалов образуются отходы двух видов — особо опасные (тип A) и неопасные (тип B).
 * Для их хранения используются одинаковые контейнеры.
 * После помещения отходов в контейнеры последние укладываются вертикальной стопкой.
 * Стопка считается взрывоопасной, если в ней подряд идет более одного контейнера типа A.
 * Стопка считается безопасной, если она не является взрывоопасной.
 * Для заданного количества контейнеров N определить количество возможных типов безопасных стопок.
 *
 * В примере из условия среди стопок длины 2 бывают безопасные стопки типов AB, BA и BB. Стопки типа AA являются взрывоопасными.
 */

function findSafeContainerStack(n) {
  const dp = [
    {
      A: 1, // dangerous
      B: 1, // safe
    },
  ];

  for (let i = 1; i <= n; i++) {
    if (dp[i] === undefined) {
      dp[i] = {
        A: 0,
        B: 0,
      };
    }

    // dangerous you can set only on safe
    dp[i].A = dp[i - 1].B;

    // safe you can set on both A and B
    dp[i].B = dp[i - 1].A + dp[i - 1].B;
  }

  return dp[n - 1].A + dp[n - 1].B;
}

function test(fn) {
  assert.deepStrictEqual(fn(3), 5, fn.name);
  assert.deepStrictEqual(fn(4), 8, fn.name);
}

test(findSafeContainerStack);

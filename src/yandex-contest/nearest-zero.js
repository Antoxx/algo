import assert from 'assert';

/**
 * Записаны n целых неотрицательных чисел — номера домов и обозначения пустых участков на карте (нули).
 * Гарантируется, что в последовательности есть хотя бы один нуль. Номера домов (положительные числа) уникальны и не превосходят 10^9.
 *
 * Для каждого из участков выведите расстояние до ближайшего нуля. Числа выводите в одну строку, разделяя их пробелами.
 */

function nearestZero(nums) {
  const ans = [];

  let lastZeroIdx = -1;
  let lnFromZero = 0;
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === 0) {
      ans[idx] = 0;

      lnFromZero = 0;

      let endIdx = lastZeroIdx === -1 ? -1 : Math.floor((idx + lastZeroIdx) / 2);
      for (let i = idx - 1; i > endIdx; i--) {
        ans[i] = ++lnFromZero;
      }

      lnFromZero = 0;
      lastZeroIdx = idx;
    } else {
      if (lastZeroIdx !== -1) {
        ans[idx] = ++lnFromZero;
      }
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn([0, 1, 4, 9, 0]), [0, 1, 2, 1, 0], fn.name);
  assert.deepStrictEqual(fn([2, 3, 0, 3, 0, 0, 3, 2, 4]), [2, 1, 0, 1, 0, 0, 1, 2, 3], fn.name);
}

test(nearestZero);

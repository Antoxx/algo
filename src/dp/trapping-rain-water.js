import assert from 'assert';

/**
 * 42. Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Pitcraft (2-dimensional rain)
 *
 * Игра PitCraft происходит в двумерном мире, который состоит из блоков размером 1 на 1 метр.
 * Остров игрока представляет собой набор столбцов различной высоты, состоящих из блоков камня и окруженный морем.
 * Над островом прошёл сильный дождь, который заполнил водой все низины, а не поместившаяся в них вода стекла в море, не увеличив его уровень. По ландшафту острова определите, сколько блоков воды осталось после дождя в низинах на острове.
 *
 * https://www.youtube.com/watch?v=SKwB41FrGgU&t=2128s
 */

function countWaterBlocks(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  let waterBlocks = 0;

  let maxPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxPos]) {
      maxPos = i;
    }
  }

  let curMax = 0;
  for (let i = 0; i <= maxPos; i++) {
    if (arr[i] > curMax) {
      curMax = arr[i];
    } else {
      waterBlocks += curMax - arr[i];
    }
  }

  curMax = 0;
  for (let i = arr.length - 1; i >= maxPos; i--) {
    if (arr[i] > curMax) {
      curMax = arr[i];
    } else {
      waterBlocks += curMax - arr[i];
    }
  }

  return waterBlocks;
}

function test(fn) {
  assert.deepStrictEqual(fn([]), 0, fn.name);
  assert.deepStrictEqual(fn([1, 1]), 0, fn.name);
  assert.deepStrictEqual(fn([1, 2, 1]), 0, fn.name);
  assert.deepStrictEqual(fn([3, 1, 4, 3, 5, 1, 1, 3, 1]), 7, fn.name);
  assert.deepStrictEqual(fn([2, 5, 2, 3, 6, 9, 3, 1, 3, 4, 6]), 18, fn.name);
}

test(countWaterBlocks);

/**
 * 40. Combination Sum II
 *
 * Given a collection of candidate numbers (candidates) and a target number (target), find ALL UNIQUE combinations in candidates
 * where the candidate numbers sum to target.
 * Each number in candidates may only be used ONCE in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * https://leetcode.com/problems/combination-sum-ii/
 */

import assert from 'assert';

function combinationSum2(candidates, target) {
  const result = new Map();

  function iterate(arr = [], sum = 0, idx = 0) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      const key = arr.sort((a, b) => a - b).join('');
      if (!result.has(key)) {
        result.set(key, arr);
      }
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) {
        continue;
      }

      if (candidates[i] > target) {
        continue;
      }

      iterate([...arr, candidates[i]], sum + candidates[i], i + 1);
    }
  }

  iterate();

  return [...result.values()];
}

function test(fn) {
  assert.deepStrictEqual(
    fn([10, 1, 2, 7, 6, 1, 5], 8),
    [
      [1, 2, 5],
      [1, 7],
      [1, 1, 6],
      [2, 6],
    ],
    fn.name,
  );
  assert.deepStrictEqual(fn([2, 5, 2, 1, 2], 5), [[1, 2, 2], [5]], fn.name);
  assert.deepStrictEqual(
    fn(
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1,
      ],
      30,
    ),
    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    fn.name,
  );
}

test(combinationSum2);

/**
 * 39. Combination Sum
 *
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates
 * where the chosen numbers sum to target. You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations
 * for the given input.
 *
 * Find indexes of two different integers in an array which sum is equal to N
 * [2,6,3,21] for N=5 gives [0,2]
 *
 * https://leetcode.com/problems/combination-sum/
 *
 */

import assert from 'assert';

function combinationSum(candidates, target) {
  const result = [];

  function iterate(arr = [], sum = 0, idx = 0) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      result.push(arr);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] > target) {
        continue;
      }

      iterate([...arr, candidates[i]], sum + candidates[i], i);
    }
  }

  iterate();

  return result;
}

function test(fn) {
  assert.deepStrictEqual(fn([2], 1), [], fn.name);
  assert.deepStrictEqual(fn([2, 3, 6, 7], 7), [[2, 2, 3], [7]], fn.name);
  assert.deepStrictEqual(
    fn([2, 3, 5], 8),
    [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
    fn.name,
  );
}

test(combinationSum);

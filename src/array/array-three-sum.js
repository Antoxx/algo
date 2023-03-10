/**
 * 3Sum
 *
 * https://leetcode.com/problems/3sum/
 */

import assert from 'assert';

function threeSumBruteForce(nums) {
  const ans = new Map();
  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          const res = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          ans.set(res.toString(), res);
        }
      }
    }
  }

  return [...ans.values()];
}

function threeSum(nums) {
  const ans = new Map();
  const map = new Map();
  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let want = target - nums[i] - nums[j];

      if (map.has(want)) {
        if (map.get(want) != i && map.get(want) != j) {
          const res = [want, nums[i], nums[j]].sort((a, b) => a - b);
          ans.set(res.toString(), res);
        }
      }
    }

    map.set(nums[i], i);
  }

  return [...ans.values()];
}

function test(fn) {
  assert.deepStrictEqual(
    fn([-1, 0, 1, 2, -1, -4]),
    [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
    fn.name,
  );
  assert.deepStrictEqual(fn([0, 1, 1]), [], fn.name);
  assert.deepStrictEqual(fn([0, 0, 0]), [[0, 0, 0]], fn.name);
}

test(threeSumBruteForce);
test(threeSum);

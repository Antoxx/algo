import assert from 'assert';

/**
 * Префиксные суммы и RSQ (Range Sum Query)
 */

function makePrefixSum(nums) {
  const ln = nums.length;
  const ans = Array(ln + 1);
  ans[0] = 0;

  for (let i = 1; i <= ln; i++) {
    ans[i] = ans[i - 1] + nums[i - 1];
  }

  return ans;
}

function rsq(nums, l, r) {
  const prefixSum = makePrefixSum(nums);
  return prefixSum[r] - prefixSum[l];
}

function test(fn) {
  assert.deepStrictEqual(fn([5, 3, 8, 1, 4, 6], 2, 5), 13, fn.name);
  assert.deepStrictEqual(fn([5, 3, 8, 1, 4, 6], 0, 3), 16, fn.name);
}

test(rsq);

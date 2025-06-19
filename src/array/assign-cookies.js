import assert from 'assert';

/**
 * 455. Assign Cookies
 *
 * Easy
 *
 * Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with;
 * and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.
 * Your goal is to maximize the number of your content children and output the maximum number.
 *
 * https://leetcode.com/problems/assign-cookies/
 */

function findContentChildren(g, s) {
  const sortedGreediness = [...g].sort((a, b) => a - b);
  const sortedCookies = [...s].sort((a, b) => a - b);

  let ans = 0;
  let gIdx = 0;
  for (const cookie of sortedCookies) {
    if (cookie >= sortedGreediness[gIdx]) {
      ans++;
      gIdx++;
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 3], [1, 1]), 1, fn.name);
  assert.deepStrictEqual(fn([1, 2], [1, 2, 3]), 2, fn.name);
}

test(findContentChildren);

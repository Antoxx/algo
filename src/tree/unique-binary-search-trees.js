/**
 * 96. Unique Binary Search Trees
 *
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
 *
 * https://leetcode.com/problems/unique-binary-search-trees/
 *
 * https://leetcode.com/problems/unique-binary-search-trees/solutions/1150728/javascript-recursive-memo-explanation/
 */

import assert from 'assert';

function numTrees(num) {
  const cache = [1, 1, 2];

  function calc(n) {
    if (cache[n]) {
      return cache[n];
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
      // console.log(i, n - 1 - i, calc(i), calc(n - 1 - i));
      ans += calc(i) * calc(n - 1 - i);
    }

    cache[n] = ans;

    return ans;
  }

  return calc(num);
}

function test(fn) {
  assert.deepStrictEqual(fn(1), 1, fn.name);
  assert.deepStrictEqual(fn(2), 2, fn.name);
  assert.deepStrictEqual(fn(3), 5, fn.name);
  assert.deepStrictEqual(fn(4), 14, fn.name);
}

test(numTrees);

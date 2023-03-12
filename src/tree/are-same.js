/**
 * 100. Same Tree
 *
 * https://leetcode.com/problems/same-tree/
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

// DFS
function isSameTree(p, q) {
  if (p === q) {
    return true;
  }

  if (p?.val !== q?.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 3]), arrToTreeNode([1, 2, 3])), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2]), arrToTreeNode([1, null, 2])), false, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 1]), arrToTreeNode([1, 1, 2])), false, fn.name);
}

test(isSameTree);

/**
 * 112. Path Sum
 *
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such
 * that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 *
 * https://leetcode.com/problems/path-sum/
 *
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

function hasPathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([]), 1), false, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1]), 1), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2]), 1), false, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 3]), 3), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 3]), 4), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 3]), 5), false, fn.name);
  // assert.deepStrictEqual(
  //   fn(arrToTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22),
  //   true,
  //   fn.name,
  // );
}

test(hasPathSum);

/**
 * 98. Validate Binary Search Tree
 *
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * https://leetcode.com/problems/validate-binary-search-tree/
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

function isValidBST(root, left, right) {
  if (!root) {
    return true;
  }

  if ((left !== undefined && left >= root.val) || (right !== undefined && right <= root.val)) {
    return false;
  }

  return isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val, right);
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([2, 1, 3])), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([5, 1, 4, null, null, 3, 6])), false, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([2, 1, 3])), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([5, 4, 6, null, null, 3, 7])), false, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([0, null, -1])), false, fn.name);
}

test(isValidBST);

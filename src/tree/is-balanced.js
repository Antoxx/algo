/**
 * 110. Balanced Binary Tree
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * https://leetcode.com/problems/balanced-binary-tree/
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

function isBalanced(root) {
  if (!root) {
    return true;
  }

  let balanced = true;

  function getHeight(node) {
    if (!node) {
      return 0;
    }

    const lHeight = getHeight(node.left);
    const rHeight = getHeight(node.right);

    if (Math.abs(lHeight - rHeight) > 1) {
      balanced = false;
    }

    return 1 + Math.max(lHeight, rHeight);
  }

  getHeight(root);

  return balanced;
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([])), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([3, 9, 20, null, null, 15, 7])), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 2, 3, 3, null, null, 4, 4])), false, fn.name);
  assert.deepStrictEqual(
    fn(arrToTreeNode([1, 2, 2, 3, null, null, 3, 4, null, null, 4])),
    false,
    fn.name,
  );
}

test(isBalanced);

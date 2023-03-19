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

function deleteNode(root, key) {
  if (!root) {
    return null;
  }

  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    } else if (root.left && !root.right) {
      return root.left;
    } else if (root.right && !root.left) {
      return root.right;
    } else {
      // min left-right
      /*
      let cur = root.left;
      while (cur.right) {
        cur = cur.right;
      }

      cur.right = root.right;
      return cur;
      */

      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }

      cur.left = root.left;
      return root.right;
    }
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }

  return root;
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([]), 0), null, fn.name);
  // assert.deepStrictEqual(
  //   treeNodeToArr(fn(arrToTreeNode([5, 3, 6, 2, 4, null, 7]), 3)),
  //   [5, 4, 6, 2, null, null, 7], // [5,2,6,null,4,null,7] also valid
  //   fn.name,
  // );
  // assert.deepStrictEqual(
  //   treeNodeToArr(fn(arrToTreeNode([5, 3, 6, 2, 4, null, 7]), 0)),
  //   [5, 3, 6, 2, 4, null, 7],
  //   fn.name,
  // );
}

test(deleteNode);

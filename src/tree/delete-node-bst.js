/**
 * 450. Delete Node in a BST
 *
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 * - Search for a node to remove.
 * - If the node is found, delete the node.
 *
 * https://leetcode.com/problems/delete-node-in-a-bst/
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

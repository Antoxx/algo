/**
 * 111. Minimum Depth of Binary Tree
 *
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 *
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

function minDepthStack(root) {
  if (!root) {
    return 0;
  }

  let minDepth = Infinity;
  const stack = [[root, 1]];

  while (stack.length > 0) {
    const [node, depth] = stack.pop();

    if (!node.left && !node.right) {
      minDepth = Math.min(minDepth, depth);
      continue;
    }

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
  }

  return minDepth;
}

function minDepthRecursive(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  if (!root.left) {
    return 1 + minDepthRecursive(root.right);
  }

  if (!root.right) {
    return 1 + minDepthRecursive(root.left);
  }

  return 1 + Math.min(minDepthRecursive(root.left), minDepthRecursive(root.right));
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([])), 0, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([3, 9, 20, null, null, 15, 7])), 2, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([2, null, 3, null, 4, null, 5, null, 6])), 5, fn.name);
}

test(minDepthStack);
test(minDepthRecursive);

/**
 * 144. Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 */

import assert from 'assert';
import { arrToTreeNode } from '../../util.mjs';

function preorderTraversalRecursive(root) {
  const ans = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    ans.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return ans;
}

function preorderTraversalRecursiveSpread(root) {
  if (!root) {
    return [];
  }

  return [
    root.val,
    ...preorderTraversalRecursiveSpread(root.left),
    ...preorderTraversalRecursiveSpread(root.right),
  ];
}

// using stack
function preorderTraversal(root) {
  const ans = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      continue;
    }

    ans.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([])), [], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1])), [1], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, null, 2, 3])), [1, 2, 3], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([3, 1, 2])), [3, 1, 2], fn.name);
}

test(preorderTraversal);
test(preorderTraversalRecursive);
test(preorderTraversalRecursiveSpread);

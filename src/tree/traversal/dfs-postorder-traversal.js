/**
 * 145. Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 */

import assert from 'assert';
import { arrToTreeNode } from '../../util.mjs';

function postorderTraversalRecursive(root) {
  const ans = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    traverse(node.right);
    ans.push(node.val);
  }

  traverse(root);

  return ans;
}

function postorderTraversalRecursiveSpread(root) {
  if (!root) {
    return [];
  }

  return [
    ...postorderTraversalRecursiveSpread(root.left),
    ...postorderTraversalRecursiveSpread(root.right),
    root.val,
  ];
}

// using stack
function postorderTraversal(root) {
  if (!root) {
    return [];
  }

  const ans = [];
  const stack = [];
  let node = root;
  let lastNodeVisited = null;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const lastNode = stack.at(-1);
      if (lastNode.right && lastNodeVisited !== lastNode.right) {
        node = lastNode.right;
      } else {
        ans.push(lastNode.val);
        lastNodeVisited = stack.pop();
      }
    }
  }

  return ans;
}

// using stack with Symbol
function postorderTraversalSymbol(root) {
  if (!root) {
    return [];
  }

  const ans = [];
  const stack = [root];
  const viewed = Symbol('viewed');

  while (stack.length) {
    const node = stack.at(-1);
    if (node[viewed] || (!node.left && !node.right)) {
      ans.push(stack.pop().val);
      continue;
    }

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }

    node[viewed] = true;
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([])), [], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1])), [1], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, null, 2, 3])), [3, 2, 1], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([3, 1, 2])), [1, 2, 3], fn.name);
}

test(postorderTraversal);
test(postorderTraversalSymbol);
test(postorderTraversalRecursive);
test(postorderTraversalRecursiveSpread);

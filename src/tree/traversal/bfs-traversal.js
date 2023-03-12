/**
 * Breadth-first search traversal
 */

import assert from 'assert';
import { arrToTreeNode, TreeNode } from '../../util.mjs';

// using queue
function traversal(root) {
  if (!root) {
    return [];
  }

  const ans = [];
  const queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    if (node) {
      ans.push(node.val);
      queue.push(node.left, node.right);
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([])), [], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1])), [1], fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, null, 2, 3])), [1, 2, 3], fn.name);

  const root = new TreeNode(4);
  const left1 = new TreeNode(2);
  left1.left = new TreeNode(1);
  left1.right = new TreeNode(3);
  const right1 = new TreeNode(6);
  right1.left = new TreeNode(5);
  right1.right = new TreeNode(7);
  root.left = left1;
  root.right = right1;

  // assert.deepStrictEqual(fn(arrToTreeNode([4, 2, 6, 1, 3, 5, 7])), [4, 2, 6, 1, 3, 5, 7], fn.name);
  assert.deepStrictEqual(fn(root), [4, 2, 6, 1, 3, 5, 7], fn.name);
}

test(traversal);

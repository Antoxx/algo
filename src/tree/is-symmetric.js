/**
 * 101. Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/
 */

import assert from 'assert';
import { arrToTreeNode } from '../util.mjs';

function isSymmetric(root) {
  function traverse(n1, n2) {
    if (n1 === n2) {
      return true;
    }

    if (n1?.val !== n2?.val) {
      return false;
    }

    return traverse(n1.left, n2.right) && traverse(n1.right, n2.left);
  }

  return traverse(root.left, root.right);
}

function isSymmetricStack(root) {
  const stack = [[root.left, root.right]];

  while (stack.length) {
    let [n1, n2] = stack.pop();

    if (n1 === n2) {
      continue;
    }

    if (n1?.val !== n2?.val) {
      return false;
    }

    stack.push([n1.left, n2.right]);
    stack.push([n1.right, n2.left]);
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 2, 3, 4, 4, 3])), true, fn.name);
  assert.deepStrictEqual(fn(arrToTreeNode([1, 2, 2, null, 3, null, 3])), false, fn.name);
}

test(isSymmetric);

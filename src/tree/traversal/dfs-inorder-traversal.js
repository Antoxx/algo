/**
 * 94. Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 */

function inorderTraversalRecursive(root) {
  const ans = [];

  function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    ans.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  return ans;
}

function inorderTraversalRecursiveSpread(root) {
  if (root === null) {
    return [];
  }

  return [
    ...inorderTraversalRecursiveSpread(root.left),
    root.val,
    ...inorderTraversalRecursiveSpread(root.right),
  ];
}

function inorderTraversalStack(root) {
  const ans = [];
  const stack = [];

  let node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      ans.push(node.val);
      node = node.right;
    }
  }

  return ans;
}

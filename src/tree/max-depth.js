/**
 * 104. Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  let maxDepth = 0;
  const stack = [[root, 1]];

  while (stack.length > 0) {
    const [node, depth] = stack.pop();

    maxDepth = Math.max(maxDepth, depth);

    if (node.right) {
      stack.push([node.right, depth + 1]);
    }

    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
  }

  return maxDepth;
}

function maxDepthRecursive(root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
}

export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function arrToListNode(arr) {
  let prev = undefined;
  let ln = arr.length;
  while (ln--) {
    prev = new ListNode(arr[ln], prev);
  }

  return prev;
}

export function listNodeToArr(listNode) {
  const arr = [];
  while (listNode) {
    arr.push(listNode.val);
    listNode = listNode.next;
  }

  return arr;
}

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left;
    this.right = right;
  }
}

export function arrToTreeNode(arr, idx = 0, chIdx = 1) {
  let root = null;

  if (idx < arr.length) {
    root = new TreeNode(arr[idx]);

    const leftIdx = idx === 0 ? idx + 1 : chIdx;
    const rightIdx = idx === 0 ? idx + 2 : chIdx + 1;
    const hasLeft = arr[leftIdx] !== null;
    const hasRight = arr[rightIdx] !== null;

    if (hasLeft) {
      root.left = arrToTreeNode(arr, leftIdx, chIdx + 2);
    }

    if (hasRight) {
      root.right = arrToTreeNode(arr, rightIdx, hasLeft ? chIdx + 4 : chIdx + 2);
    }
  }

  return root;
}

export function treeNodeToArr(root) {
  return root;
}

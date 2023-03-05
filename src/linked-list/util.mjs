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

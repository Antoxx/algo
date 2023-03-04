/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

import assert from 'assert';

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function arrToListNode(arr) {
  let prev = undefined;
  let ln = arr.length;
  while (ln--) {
    prev = new ListNode(arr[ln], prev);
  }

  return prev;
}

function listNodeToArr(listNode) {
  const arr = [];
  while (listNode) {
    arr.push(listNode.val);
    listNode = listNode.next;
  }

  return arr;
}

function mergeTwoSortedList(list1, list2) {
  if (list1?.val === undefined) {
    return list2;
  }

  if (list2?.val === undefined) {
    return list1;
  }

  let curList1 = list1;
  let curList2 = list2;
  let root = new ListNode();
  let list = root;

  while (true) {
    const val1 = curList1?.val;
    const val2 = curList2?.val;

    if (val1 === undefined && val2 === undefined) {
      break;
    }

    if (val1 !== undefined && val2 !== undefined) {
      if (val1 < val2) {
        list.next = new ListNode(val1);
        curList1 = curList1?.next;
      } else {
        list.next = new ListNode(val2);
        curList2 = curList2?.next;
      }
    } else {
      if (val1 !== undefined) {
        list.next = new ListNode(val1);
        curList1 = curList1?.next;
      } else {
        list.next = new ListNode(val2);
        curList2 = curList2?.next;
      }
    }

    list = list.next;
  }

  return root.next;
}

function test(fn) {
  // assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([]), arrToListNode([]))), [], fn.name);
  // assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([]), arrToListNode([0]))), [0], fn.name);
  // assert.deepStrictEqual(
  //   listNodeToArr(fn(arrToListNode([1, 2, 4]), arrToListNode([1, 3, 4]))),
  //   [1, 1, 2, 3, 4, 4],
  //   fn.name,
  // );
  // assert.deepStrictEqual(
  //   listNodeToArr(fn(arrToListNode([5]), arrToListNode([1, 2, 4]))),
  //   [1, 2, 4, 5],
  //   fn.name,
  // );
  // assert.deepStrictEqual(
  //   listNodeToArr(
  //     fn(arrToListNode([-10, -9, -6, -4, 1, 9, 9]), arrToListNode([-5, -3, 0, 7, 8, 8])),
  //   ),
  //   [-10, -9, -6, -5, -4, -3, 0, 1, 7, 8, 8, 9, 9],
  //   fn.name,
  // );
  assert.deepStrictEqual(
    listNodeToArr(fn(arrToListNode([-6, -5, 6, 6, 7]), arrToListNode([0]))),
    [-6, -5, 0, 6, 6, 7],
    fn.name,
  );
}

test(mergeTwoSortedList);

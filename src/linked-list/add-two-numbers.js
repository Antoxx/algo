/**
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * https://leetcode.com/problems/add-two-numbers/
 */

import assert from 'assert';
import { ListNode, arrToListNode, listNodeToArr } from '../util.mjs';

function addTwoNumbers(l1, l2) {
  let resList = new ListNode();
  let list = resList;
  let curList1 = l1;
  let curList2 = l2;
  let carryMoving = false;

  while (true) {
    const val1 = curList1?.val || 0;
    const val2 = curList2?.val || 0;
    const carryVal = +carryMoving;

    const sum = val1 + val2 + carryVal;

    carryMoving = sum >= 10;
    list.val = carryMoving ? sum - 10 : sum;

    curList1 = curList1?.next;
    curList2 = curList2?.next;

    if (!curList1 && !curList2 && !carryMoving) {
      break;
    } else {
      list.next = new ListNode();
      list = list.next;
    }
  }

  return resList;
}

function test(fn) {
  assert.deepStrictEqual(
    listNodeToArr(fn(arrToListNode([2, 4, 3]), arrToListNode([5, 6, 4]))),
    [7, 0, 8],
    fn.name,
  );
  assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([0]), arrToListNode([0]))), [0], fn.name);
  assert.deepStrictEqual(
    listNodeToArr(fn(arrToListNode([9, 9, 9, 9, 9, 9, 9]), arrToListNode([9, 9, 9, 9]))),
    [8, 9, 9, 9, 0, 0, 0, 1],
    fn.name,
  );
}

test(addTwoNumbers);

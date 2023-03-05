/**
 * https://leetcode.com/problems/add-two-numbers/
 */

import assert from 'assert';
import { ListNode, arrToListNode, listNodeToArr } from './util.mjs';

function addTwoNumbers(l1, l2) {
  let resList = new ListNode();
  let list = resList;
  let curList1 = l1;
  let curList2 = l2;
  let radixMoving = false;

  while (true) {
    const val1 = curList1?.val || 0;
    const val2 = curList2?.val || 0;
    const radixVal = +radixMoving;

    const sum = val1 + val2 + radixVal;

    radixMoving = sum >= 10;
    list.val = radixMoving ? sum - 10 : sum;

    curList1 = curList1?.next;
    curList2 = curList2?.next;

    if (!curList1 && !curList2 && !radixMoving) {
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

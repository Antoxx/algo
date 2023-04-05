/**
 * 203. Remove Linked List Elements
 *
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 * https://leetcode.com/problems/remove-linked-list-elements/
 */

import assert from 'assert';
import { ListNode, arrToListNode, listNodeToArr } from '../util.mjs';

function removeElements(head, val) {
  let node = head;
  let root = new ListNode();
  let rootNext = root;

  while (node) {
    if (node.val !== val) {
      rootNext.next = new ListNode(node.val);
      rootNext = rootNext.next;
    }

    node = node.next;
  }

  return root.next;
}

function removeElements2(head, val) {
  // remove "val" from the head
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }

  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

function test(fn) {
  assert.deepStrictEqual(
    listNodeToArr(fn(arrToListNode([1, 2, 6, 3, 4, 5, 6]), 6)),
    [1, 2, 3, 4, 5],
    fn.name,
  );
  assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([]), 1)), [], fn.name);
  assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([7, 7, 7, 7]), 7)), [], fn.name);
}

test(removeElements);
test(removeElements2);

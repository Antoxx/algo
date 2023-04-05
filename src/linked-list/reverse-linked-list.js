/**
 * 206. Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * https://leetcode.com/problems/reverse-linked-list/
 */

import assert from 'assert';
import { arrToListNode, listNodeToArr } from '../util.mjs';

function reverseListIterate(head) {
  let node = head;
  let prev = null;
  let next = null;

  while (node) {
    next = node.next;

    node.next = prev;

    prev = node;
    node = next;
  }

  return prev;
}

function reverseListIterate2(head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
}

function reverseListRecursive(head, prev = null) {
  if (!head) {
    return prev;
  }

  let next = head.next;
  head.next = prev;

  return reverseListRecursive(next, head);
}

function test(fn) {
  assert.deepStrictEqual(
    listNodeToArr(fn(arrToListNode([1, 2, 3, 4, 5]))),
    [5, 4, 3, 2, 1],
    fn.name,
  );
  assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([1, 2]))), [2, 1], fn.name);
  assert.deepStrictEqual(listNodeToArr(fn(arrToListNode([]))), [], fn.name);
}

test(reverseListIterate);
test(reverseListIterate2);
test(reverseListRecursive);

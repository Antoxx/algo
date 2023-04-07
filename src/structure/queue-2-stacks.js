/**
 * 232. Implement Queue using Stacks
 *
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 * - void push(int x) Pushes element x to the back of the queue.
 * - int pop() Removes the element from the front of the queue and returns it.
 * - int peek() Returns the element at the front of the queue.
 * - boolean empty() Returns true if the queue is empty, false otherwise.
 *
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

import assert from 'assert';

class MyQueue {
  #stack1;
  #stack2;

  constructor() {
    this.#clear();
  }

  push(val) {
    this.#stack1.push(val);
  }

  pop() {
    this.#moveData();
    return this.#stack2.pop();
  }

  peek() {
    return this.#stack2.length ? this.#stack2.at(-1) : this.#stack1.at(0);
  }

  empty() {
    return !this.#stack1.length && !this.#stack2.length;
  }

  #clear() {
    this.#stack1 = [];
    this.#stack2 = [];
  }

  #moveData() {
    if (this.#stack2.length === 0) {
      while (this.#stack1.length) {
        this.#stack2.push(this.#stack1.pop());
      }
    }
  }
}

const queue = new MyQueue();
queue.push(1); // queue is: [1]
queue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
assert.equal(queue.peek(), 1); // return 1
assert.equal(queue.pop(), 1); // return 1
assert.equal(queue.empty(), false); // return false

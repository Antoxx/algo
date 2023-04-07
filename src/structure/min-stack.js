/**
 * 155. Min Stack
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 *
 * https://leetcode.com/problems/min-stack/
 */

import assert from 'assert';

class MinStack {
  stack = [];

  push(val) {
    const min = Math.min(this.getMin() ?? Infinity, val);
    this.stack.push([val, min]);
  }

  pop() {
    return this.stack.pop()?.[0];
  }

  top() {
    return this.stack.at(-1)?.[0];
  }

  getMin() {
    return this.stack.at(-1)?.[1];
  }
}

{
  const stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  assert.equal(stack.getMin(), -3); // return -3
  stack.pop();
  assert.equal(stack.top(), 0); // return 0
  assert.equal(stack.getMin(), -2); // return -2
}

{
  const stack = new MinStack();
  stack.push(2);
  stack.push(0);
  stack.push(3);
  stack.push(0);
  assert.equal(stack.getMin(), 0);
  stack.pop();
  assert.equal(stack.getMin(), 0);
  stack.pop();
  assert.equal(stack.getMin(), 0);
  stack.pop();
  assert.equal(stack.getMin(), 2);
}

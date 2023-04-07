/**
 * 622. Design Circular Queue
 *
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 *
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
 *
 * Implement the MyCircularQueue class:
 *
 * MyCircularQueue(k) Initializes the object with the size of the queue to be k.
 * int Front() Gets the front item from the queue. If the queue is empty, return -1.
 * int Rear() Gets the last item from the queue. If the queue is empty, return -1.
 * boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
 * boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
 * boolean isEmpty() Checks whether the circular queue is empty or not.
 * boolean isFull() Checks whether the circular queue is full or not.
 * You must solve the problem without using the built-in queue data structure in your programming language.
 *
 * https://leetcode.com/problems/design-circular-queue/
 */

import assert from 'assert';

class MyCircularQueue {
  capacity;
  list;

  size = 0;
  readIndex = 0;
  writeIndex = -1;

  constructor(capacity) {
    this.capacity = capacity;
    this.list = Array(capacity);
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }

    this.writeIndex = (this.writeIndex + 1) % this.capacity;
    this.list[this.writeIndex] = value;
    this.size++;

    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    this.readIndex = (this.readIndex + 1) % this.capacity;
    this.size--;

    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.list[this.readIndex];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.list.at(this.writeIndex);
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }
}

{
  const myCircularQueue = new MyCircularQueue(3);
  assert.equal(myCircularQueue.enQueue(1), true);
  assert.equal(myCircularQueue.enQueue(2), true);
  assert.equal(myCircularQueue.enQueue(3), true);
  assert.equal(myCircularQueue.enQueue(4), false);
  assert.equal(myCircularQueue.Rear(), 3);
  assert.equal(myCircularQueue.isFull(), true);
  assert.equal(myCircularQueue.deQueue(), true);
  assert.equal(myCircularQueue.enQueue(4), true);
  assert.equal(myCircularQueue.Rear(), 4);
}

{
  const myCircularQueue = new MyCircularQueue(3);
  assert.equal(myCircularQueue.enQueue(7), true);
  assert.equal(myCircularQueue.deQueue(), true);
  assert.equal(myCircularQueue.Front(), -1);
  assert.equal(myCircularQueue.deQueue(), false);
  assert.equal(myCircularQueue.Front(), -1);
  assert.equal(myCircularQueue.Rear(), -1);
  assert.equal(myCircularQueue.enQueue(0), true);
  assert.equal(myCircularQueue.isFull(), false);
  assert.equal(myCircularQueue.deQueue(), true);
  assert.equal(myCircularQueue.Rear(), -1);
  assert.equal(myCircularQueue.enQueue(3), true);
}

import assert from 'assert';

/**
 * Задан максимально допустимый размер очереди, он не превосходит 5000.
 * Далее идут команды по одной на строке.
 * Команды могут быть следующих видов:
 * - push(x) — добавить число x в очередь;
 * - pop() — удалить число из очереди и вывести на печать;
 * - peek() — напечатать первое число в очереди;
 * - size() — вернуть размер очереди;
 *
 * При превышении допустимого размера очереди нужно вывести «error».
 * При вызове операций pop() или peek() для пустой очереди нужно вывести «None».
 */

class SizedQueue {
  #size;
  #queue;

  constructor(size) {
    this.#size = size;
    this.clear();
  }

  push(x) {
    this.#queue.push(x);
    // ! error
    return this;
  }

  pop() {
    return this.#queue.shift() ?? 'none';
  }

  peek() {
    if (!this.#queue.length) {
      return 'none';
    }

    return this.#queue[0] ?? 'none';
  }

  size() {
    return this.#queue.length > this.#size ? 'error' : this.#queue.length;
  }

  clear() {
    this.#queue = [];
  }
}

const queue = new SizedQueue(2);
assert.deepStrictEqual(queue.size(), 0);
assert.deepStrictEqual(queue.peek(), 'none');
assert.deepStrictEqual(queue.push(1), queue);
assert.deepStrictEqual(queue.size(), 1);
assert.deepStrictEqual(queue.push(2), queue);
assert.deepStrictEqual(queue.push(3), queue);
assert.deepStrictEqual(queue.size(), 'error');
assert.deepStrictEqual(queue.peek(), 1);
assert.deepStrictEqual(queue.pop(), 1);
assert.deepStrictEqual(queue.size(), 2);

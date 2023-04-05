import assert from 'assert';
import { ListNode } from '../util.mjs';

/**
 * Любимый вариант очереди Тимофея — очередь, написанная с использованием связного списка. Помогите ему с реализацией.
 * Очередь должна поддерживать выполнение трёх команд:
 * get() — вывести элемент, находящийся в голове очереди, и удалить его. Если очередь пуста, то вывести «error».
 * put(x) — добавить число x в очередь
 * size() — вывести текущий размер очереди
 *
 * Формат ввода
 * В первой строке записано количество команд n — целое число, не превосходящее 1000.
 * В каждой из следующих n строк записаны команды по одной строке.
 *
 * Формат вывода
 * Выведите ответ на каждый запрос по одному в строке.
 */

class LinkedListQueue {
  cnt = 0;
  head = null;
  tail = null;

  get() {
    const { head, tail } = this;
    if (!head) {
      return 'error';
    }

    if (head === tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
    }

    this.cnt--;

    return head.val;
  }

  put(x) {
    const node = new ListNode(x);
    const { head, tail } = this;

    if (head && tail) {
      tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.cnt++;

    return x;
  }

  size() {
    return this.cnt;
  }
}

const queue = new LinkedListQueue();
assert.deepStrictEqual(queue.size(), 0);
assert.deepStrictEqual(queue.get(), 'error');
assert.deepStrictEqual(queue.put(10), 10);
assert.deepStrictEqual(queue.size(), 1);
assert.deepStrictEqual(queue.put(20), 20);
assert.deepStrictEqual(queue.size(), 2);
assert.deepStrictEqual(queue.get(), 10);
assert.deepStrictEqual(queue.size(), 1);
assert.deepStrictEqual(queue.put(30), 30);
assert.deepStrictEqual(queue.size(), 2);
assert.deepStrictEqual(queue.get(), 20);
assert.deepStrictEqual(queue.get(), 30);
assert.deepStrictEqual(queue.get(), 'error');

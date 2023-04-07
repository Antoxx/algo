import assert from 'assert';

/**
 * Гоша реализовал структуру данных Дек, максимальный размер которого определяется заданным числом.
 * Методы push_back(x), push_front(x), pop_back(), pop_front() работали корректно.
 * Но, если в деке было много элементов, программа работала очень долго. Дело в том, что не все операции выполнялись за O(1).
 * Помогите Гоше! Напишите эффективную реализацию.
 *
 * Внимание: при реализации нельзя использовать связный список.
 *
 * push_back(value) – добавить элемент в конец дека. Если в деке уже находится максимальное число элементов, вывести «error».
 * push_front(value) – добавить элемент в начало дека. Если в деке уже находится максимальное число элементов, вывести «error».
 * pop_front() – вывести первый элемент дека и удалить его. Если дек был пуст, то вывести «error».
 * pop_back() – вывести последний элемент дека и удалить его. Если дек был пуст, то вывести «error».
 */

class DequeMaxEffective {
  #maxSize;
  #items;
  #size;
  #front;
  #back;

  constructor(maxSize) {
    this.#maxSize = maxSize;
    this.clear();
  }

  pushBack(val) {
    if (this.#size >= this.#maxSize) {
      return 'error';
    }

    this.#items[++this.#back] = val;
    this.#size++;
    return this;
  }

  pushFront(val) {
    if (this.#size >= this.#maxSize) {
      return 'error';
    }

    this.#items[--this.#front] = val;
    this.#size++;
    return this;
  }

  popBack() {
    if (this.#size === 0) {
      return 'error';
    }

    const val = this.#items[this.#back];

    delete this.#items[this.#back];
    this.#size--;
    this.#back--;
    return val;
  }

  popFront() {
    if (this.#size === 0) {
      return 'error';
    }

    const val = this.#items[this.#front];

    delete this.#items[this.#front];
    this.#size--;
    this.#front++;
    return val;
  }

  clear() {
    this.#items = {};
    this.#size = 0;
    this.#front = 0;
    this.#back = -1;
  }

  size() {
    return this.#size;
  }
}

const deque = new DequeMaxEffective(5);

assert.deepStrictEqual(deque.size(), 0);
assert.deepStrictEqual(deque.popBack(), 'error');
assert.deepStrictEqual(deque.popFront(), 'error');
deque.pushBack(1);
assert.deepStrictEqual(deque.size(), 1);
deque.pushBack(2);
assert.deepStrictEqual(deque.size(), 2);
deque.pushFront(-1);
assert.deepStrictEqual(deque.size(), 3);
deque.pushFront(-2);
assert.deepStrictEqual(deque.size(), 4);
assert.deepStrictEqual(deque.popBack(), 2);
assert.deepStrictEqual(deque.size(), 3);
assert.deepStrictEqual(deque.popBack(), 1);
assert.deepStrictEqual(deque.size(), 2);
assert.deepStrictEqual(deque.popBack(), -1);
assert.deepStrictEqual(deque.size(), 1);
assert.deepStrictEqual(deque.popBack(), -2);
assert.deepStrictEqual(deque.size(), 0);
assert.deepStrictEqual(deque.popBack(), 'error');
deque.pushFront(100);
assert.deepStrictEqual(deque.size(), 1);
assert.deepStrictEqual(deque.popFront(), 100);

import assert from 'assert';

/**
 * Реализуйте класс StackMaxEffective, поддерживающий операцию определения максимума среди элементов в стеке.
 * Сложность операции должна быть O(1). Для пустого стека операция должна возвращать None.
 * При этом push(x) и pop() также должны выполняться за константное время.
 */

class StackMaxEffective {
  #items;
  #maxEl;

  constructor() {
    this.clear();
  }

  push(el) {
    if (this.#maxEl < el) {
      this.#maxEl = el;
    }

    this.#items.push([el, this.#maxEl]);
    return this;
  }

  pop() {
    const el = this.#items.pop();
    this.#maxEl = this.#items.length ? this.#items.at(-1)[1] : -Infinity;
    return el ? el[0] : null;
  }

  // O(1)
  max() {
    return this.#maxEl === -Infinity ? null : this.#maxEl;
  }

  clear() {
    this.#items = [];
    this.#maxEl = -Infinity;
  }
}

const stack = new StackMaxEffective();

assert.deepStrictEqual(stack.max(), null);
assert.deepStrictEqual(stack.pop(), null);
stack.push(-100);
assert.deepStrictEqual(stack.max(), -100);
assert.deepStrictEqual(stack.max(), -100);
stack.push(0);
assert.deepStrictEqual(stack.max(), 0);
assert.deepStrictEqual(stack.pop(), 0);
assert.deepStrictEqual(stack.max(), -100);
assert.deepStrictEqual(stack.pop(), -100);
assert.deepStrictEqual(stack.pop(), null);

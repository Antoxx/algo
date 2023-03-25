import assert from 'assert';

/**
 * Дано 2 числа X и Y без ведущих нулей
 * Необходимо проверить, можно ли получить первое из второго перестановкой цифр
 */

function isAnagram(x, y) {
  function split(num) {
    const arr = Array(10).fill(0);
    while (num > 0) {
      const n = num % 10;
      arr[n]++;

      num = Math.trunc(num / 10);
    }

    return arr;
  }

  const xArr = split(x);
  const yArr = split(y);

  for (let i = 0; i < 10; i++) {
    if (xArr[i] !== yArr[i]) {
      return false;
    }
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn(1, 1), true, fn.name);
  assert.deepStrictEqual(fn(1, 2), false, fn.name);
  assert.deepStrictEqual(fn(21, 12), true, fn.name);
  assert.deepStrictEqual(fn(111, 112), false, fn.name);
  assert.deepStrictEqual(fn(1011, 1110), true, fn.name);
}

test(isAnagram);

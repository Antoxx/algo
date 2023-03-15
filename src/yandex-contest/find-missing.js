import assert from 'assert';

/**
 * Даны два списка, нужно вернуть элементы, которые есть в 1-ом списке, но нет во 2-ом. Оценить эффективность своего решения.
 */

function findMissing(arr1, arr2) {
  const ans = [];
  const arr2set = new Set(arr2);

  for (let el of arr1) {
    if (!arr2set.has(el)) {
      ans.push(el);
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn([], []), [], fn.name);
  assert.deepStrictEqual(fn([1, 2, 3], [1]), [2, 3], fn.name);
  assert.deepStrictEqual(fn([1, 2, 3], [1, 2]), [3], fn.name);
}

test(findMissing);

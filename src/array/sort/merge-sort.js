import assert from 'assert';

/**
 * Ordinary array merge sort - O(n log n)
 */

function merge(left, right) {
  let arr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function arrayMergeSort(arr) {
  const ln = arr.length;
  if (ln <= 1) {
    return arr;
  }

  const middle = Math.floor(ln / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  return merge(arrayMergeSort(leftArr), arrayMergeSort(rightArr));
}

function test(fn) {
  const arr = Array(50)
    .fill(1)
    .map(() => (Math.random() * 100) | 0);

  const sortedArr = [...arr].sort((a, b) => a - b);

  assert.deepStrictEqual(fn([]), [], fn.name);
  assert.deepStrictEqual(fn([1]), [1], fn.name);
  assert.deepStrictEqual(fn([1, 2]), [1, 2], fn.name);
  assert.deepStrictEqual(fn([2, 1]), [1, 2], fn.name);
  assert.deepStrictEqual(fn([3, 2, 1]), [1, 2, 3], fn.name);
  assert.deepStrictEqual(fn([3, 5, 1]), [1, 3, 5], fn.name);
  assert.deepStrictEqual(fn([1, 5, 10]), [1, 5, 10], fn.name);
  assert.deepStrictEqual(fn(arr), sortedArr, fn.name);
}

test(arrayMergeSort);

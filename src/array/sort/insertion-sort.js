import assert from 'assert';

/**
 * Ordinary array insertion sort - O(n²)
 */

function arrayInsertionSort(arr) {
  const ln = arr.length;
  if (ln <= 1) {
    return arr;
  }

  for (let i = 1; i < ln; i++) {
    let sortedIdx = i;
    let changedIdx = i;
    while (sortedIdx--) {
      if (arr[sortedIdx] > arr[changedIdx]) {
        [arr[sortedIdx], arr[changedIdx]] = [arr[changedIdx], arr[sortedIdx]];
        changedIdx = sortedIdx;
      } else {
        break;
      }
    }
  }

  return arr;
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

test(arrayInsertionSort);

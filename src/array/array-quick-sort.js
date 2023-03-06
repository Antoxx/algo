import assert from 'assert';

/**
 * Ordinary array quick sort - O(n log n) - O(n²)
 */

function arrayQuickSort(arr) {
  const ln = arr.length;
  if (ln <= 1) {
    return arr;
  }

  const lessArr = [];
  const moreArr = [];
  const midIdx = Math.floor(ln / 2);
  const midVal = arr[midIdx];

  for (let i = 0; i < ln; i++) {
    if (i === midIdx) {
      continue;
    }

    if (arr[i] < midVal) {
      lessArr.push(arr[i]);
    } else {
      moreArr.push(arr[i]);
    }
  }

  return [...arrayQuickSort(lessArr), midVal, ...arrayQuickSort(moreArr)];
}

function test(fn) {
  const arr = Array(5)
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

test(arrayQuickSort);

import assert from 'assert';

/**
 * Ordinary array selection sort - O(N\*N)
 */

function arraySelectionSort(arr) {
  const ln = arr.length;

  for (let i = 0; i < ln - 1; i++) {
    const element = arr[i];
    let min = element;
    let minIdx = i;

    for (let j = i + 1; j < ln; j++) {
      const el = arr[j];
      if (el < min) {
        min = el;
        minIdx = j;
      }
    }

    if (min !== element) {
      arr[i] = min;
      arr[minIdx] = element;
    }
  }

  return arr;
}

function test(fn) {
  const arr = Array(20)
    .fill(1)
    .map(() => (Math.random() * 100) | 0);

  const sortedArr = [...arr].sort((a, b) => a - b);

  assert.deepStrictEqual(fn(arr), sortedArr, fn.name);
}

test(arraySelectionSort);

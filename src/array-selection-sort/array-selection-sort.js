import assert from 'assert';

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
  const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
  const sortedArr = [
    -5, -1, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9, 23, 32, 35,
  ];

  assert.deepStrictEqual(fn(arr), sortedArr, fn.name);
}

test(arraySelectionSort);

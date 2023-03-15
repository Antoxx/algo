import assert from 'assert';

/**
 * Ordinary array counting sort - O(n²)
 */

function arrayCountingSort(arr) {
  const ln = arr.length;
  if (ln <= 1) {
    return arr;
  }

  const tempArr = [];
  for (const val of arr) {
    if (tempArr[val]) {
      tempArr[val]++;
    } else {
      tempArr[val] = 1;
    }
  }

  let idx = 0;
  for (let i = 0; i < tempArr.length; i++) {
    let cnt = tempArr[i];
    while (cnt) {
      arr[idx] = i;
      idx++;
      cnt--;
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

test(arrayCountingSort);

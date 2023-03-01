import assert from 'assert';

function arrayBubbleSort(arr) {
  const ln = arr.length;

  for (let i = 0; i < ln; i++) {
    for (let j = 0; j < ln - 1; j++) {
      const bubble = arr[j];
      const next = arr[j + 1];

      if (bubble > next) {
        arr[j] = next;
        arr[j + 1] = bubble;
      }
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

test(arrayBubbleSort);

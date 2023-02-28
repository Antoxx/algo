import assert from 'assert';

// function arrayBinarySearch(arr, search) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] >= search) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return arr[right] === search ? right : -1;
// }

function arrayBinarySearch(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  let pos = null;
  let mid;

  if (search < arr[left] || search > arr[right]) {
    return null;
  }

  while (left <= right) {
    if (arr[left] === search) {
      return left;
    }
    if (arr[right] === search) {
      return right;
    }

    mid = Math.floor((left + right) / 2);
    if (arr[mid] === search) {
      return mid;
    }

    if (arr[mid] < search) {
      left = mid + 1;
    }

    if (arr[mid] > search) {
      right = mid - 1;
    }
  }

  return pos;
}

function test(fn) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  assert.deepStrictEqual(fn(arr, 7), 7, fn.name);
  assert.deepStrictEqual(fn(arr, 0), 0, fn.name);
  assert.deepStrictEqual(fn(arr, 15), 15, fn.name);
  assert.deepStrictEqual(fn(arr, 13), 13, fn.name);
  assert.deepStrictEqual(fn(arr, 16), null, fn.name);

  assert.deepStrictEqual(fn([], 1), null, fn.name);
  assert.deepStrictEqual(fn([0], 0), 0, fn.name);
  assert.deepStrictEqual(fn([0], 1), null, fn.name);
  assert.deepStrictEqual(fn([1, 2], 1), 0, fn.name);
  assert.deepStrictEqual(fn([1, 2], 15), null, fn.name);
}

test(arrayBinarySearch);

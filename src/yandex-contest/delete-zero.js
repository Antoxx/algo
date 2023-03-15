import assert from 'assert';

/**
 * Дан массив целых чисел. Нужно удалить из него нули. Можно использовать только О(1) дополнительной памяти.
 */

function deleteZero1(nums) {
  let idx = -1;
  while ((idx = nums.indexOf(0)) !== -1) {
    nums.splice(idx, 1);
  }
  return nums;
}

function deleteZero2(nums) {
  let idx = -1;
  let found = false;
  for (const num of nums) {
    if (num !== 0) {
      nums[++idx] = num;
    } else {
      found = true;
    }
  }

  if (found) {
    nums.length = idx + 1;
  }

  return nums;
}

function test(fn) {
  assert.deepStrictEqual(fn([]), [], fn.name);
  assert.deepStrictEqual(fn([0]), [], fn.name);
  assert.deepStrictEqual(fn([1, 2, 3]), [1, 2, 3], fn.name);
  assert.deepStrictEqual(fn([0, 2, 3]), [2, 3], fn.name);
  assert.deepStrictEqual(fn([1, 0, 3]), [1, 3], fn.name);
  assert.deepStrictEqual(fn([1, 2, 0]), [1, 2], fn.name);
}

test(deleteZero1);
test(deleteZero2);

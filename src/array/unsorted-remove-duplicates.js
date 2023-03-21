/**
 *
 */

import assert from 'assert';

function removeDuplicates(nums) {
  const hash = new Map();

  nums.forEach((num) => {
    if (!hash.has(num)) {
      hash.set(num, true);
    }
  });

  return [...hash.keys()];
}

function removeDuplicatesSet(nums) {
  return [...new Set(nums)];
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 1]), [1, 2], fn.name);
  assert.deepStrictEqual(fn([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]), [1, 2, 3, 5, 9, 8], fn.name);
}

test(removeDuplicates);
test(removeDuplicatesSet);

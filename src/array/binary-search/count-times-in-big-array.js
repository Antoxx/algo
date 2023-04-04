import assert from 'assert';

/**
 * Задана отсортированная по неубыванию последовательность из N чисел и число X
 * Необходимо определить сколько раз число Х входит в последовательность
 */

function count(nums, x) {
  function lBinSearch(l, r, check) {
    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (check(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  }
  function checkIsGT(idx) {
    return nums[idx] > x;
  }
  function checkIsGE(idx) {
    return nums[idx] >= x;
  }
  function findFirst(check) {
    const ans = lBinSearch(0, nums.length - 1, check);
    // check for [..., 3,3,3]
    if (!check(ans)) {
      return nums.length;
    }
    return ans;
  }

  const idxGT = findFirst(checkIsGT);
  const idxGE = findFirst(checkIsGE);

  return idxGT - idxGE;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 2, 2, 3, 3], 2), 3, fn.name);
  assert.deepStrictEqual(fn([1, 2, 2, 2, 3, 3], 3), 2, fn.name);
}

test(count);

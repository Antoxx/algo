import assert from 'assert';

/**
 * 12. Integer to Roman
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * https://leetcode.com/problems/integer-to-roman/
 */

function intToRoman(num) {
  const hash = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let ans = '';
  for (let roman in hash) {
    let count = num / hash[roman];
    if (count > 0) {
      ans += roman.repeat(count);
      num = num % hash[roman];
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(0), '', fn.name);
  assert.deepStrictEqual(fn(1), 'I', fn.name);
  assert.deepStrictEqual(fn(3), 'III', fn.name);
  assert.deepStrictEqual(fn(5), 'V', fn.name);
  assert.deepStrictEqual(fn(4), 'IV', fn.name);
  assert.deepStrictEqual(fn(58), 'LVIII', fn.name);
  assert.deepStrictEqual(fn(1994), 'MCMXCIV', fn.name);
  assert.deepStrictEqual(fn(2020), 'MMXX', fn.name);
}

test(intToRoman);

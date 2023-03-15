import assert from 'assert';

/**
 * 17. Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Time O(3^N * 4^M)
 * N is the number of digits in the input that maps to 3 letters (e.g. 2, 3, 4, 5, 6, 8)
 * M is the number of digits in the input that maps to 4 letters (e.g. 7, 9)
 */

function letterCombinations(digits) {
  const ln = digits.length;
  if (ln === 0) {
    return [];
  }

  const data = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (ln === 1) {
    return data[digits[0]];
  }

  const ans = [];

  function iterate(str, idx) {
    if (str.length == digits.length) {
      ans.push(str);
      return;
    }

    let chars = data[digits[idx]];
    for (let i = 0; i < chars.length; i++) {
      iterate(str + chars[i], idx + 1);
    }
  }

  iterate('', 0);

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn('23'), ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'], fn.name);
  assert.deepStrictEqual(fn(''), [], fn.name);
  assert.deepStrictEqual(fn('2'), ['a', 'b', 'c'], fn.name);
}

test(letterCombinations);

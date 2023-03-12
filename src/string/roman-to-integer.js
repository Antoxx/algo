import assert from 'assert';

/**
 * 13. Roman to Integer
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * https://leetcode.com/problems/roman-to-integer/
 */

function romanToInteger(s) {
  let cnt = s.length;
  if (cnt === 0) {
    return 0;
  }

  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const invertHash = {
    I: ['V', 'X'],
    X: ['L', 'C'],
    C: ['D', 'M'],
  };

  let int = 0;

  let i = cnt;
  while (i--) {
    const cur = s[i];
    let tmp = hash[cur];

    if (s[i + 1] && invertHash[cur] && invertHash[cur].includes(s[i + 1])) {
      tmp *= -1;
    }

    int += tmp;
  }

  return int;
}

function test(fn) {
  assert.deepStrictEqual(fn(''), 0, fn.name);
  assert.deepStrictEqual(fn('I'), 1, fn.name);
  assert.deepStrictEqual(fn('III'), 3, fn.name);
  assert.deepStrictEqual(fn('V'), 5, fn.name);
  assert.deepStrictEqual(fn('IV'), 4, fn.name);
  assert.deepStrictEqual(fn('LVIII'), 58, fn.name);
  assert.deepStrictEqual(fn('MCMXCIV'), 1994, fn.name);
}

test(romanToInteger);

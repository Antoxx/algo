import assert from 'assert';

/**
 * Даны две строки.
 * Написать функцию, которая вернёт True, если из первой строки можно получить вторую, совершив не более 1 изменения
 * (== удаление / замена символа).
 *
 * Нужно реализовать функцию OneEditApart, проверяющую, можно ли одну строку получить из другой не более, чем за одно исправление (удаление, добавление, изменение символа):
 * OneEditApart("cat", "dog") -> false
 * OneEditApart("cat", "cats") -> true
 * OneEditApart("cat", "cut") -> true
 * OneEditApart("cat", "cast") -> true
 * OneEditApart("cat", "at") -> true
 * OneEditApart("cat", "acts") -> false
 * OneEditApart("cat", "act") -> false
 * OneEditApart("cat", "aat") -> true
 */

function isAlmostEqual(s1, s2) {
  const ln1 = s1.length;
  const ln2 = s2.length;
  if (Math.abs(ln1 - ln2) > 1) {
    return false;
  }

  let changes = 0;
  if (ln1 === ln2) {
    for (let i = 0; i < ln1; i++) {
      if (s1[i] !== s2[i]) {
        changes++;

        if (changes > 1) {
          return false;
        }
      }
    }
  } else {
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < ln1 && idx2 < ln2) {
      if (s1[idx1] === s2[idx2]) {
        idx1++;
        idx2++;
      } else {
        changes++;
        if (changes > 1) {
          return false;
        }

        if (ln1 > ln2) {
          idx1++;
        } else {
          idx2++;
        }
      }
    }
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn('abc', 'a'), false, fn.name);
  assert.deepStrictEqual(fn('abc', 'abc'), true, fn.name);
  assert.deepStrictEqual(fn('abc', 'acb'), false, fn.name);
  assert.deepStrictEqual(fn('abc', 'dbc'), true, fn.name);
  assert.deepStrictEqual(fn('abc', 'bc'), true, fn.name);
  assert.deepStrictEqual(fn('abc', 'ab'), true, fn.name);
  assert.deepStrictEqual(fn('abc', 'ac'), true, fn.name);
  assert.deepStrictEqual(fn('abcc', 'abc'), true, fn.name);
  assert.deepStrictEqual(fn('bacc', 'abc'), false, fn.name);
  assert.deepStrictEqual(fn('aaebcd', 'aabcd'), true, fn.name);
}

test(isAlmostEqual);

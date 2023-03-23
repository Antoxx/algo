import assert from 'assert';

/**
 * Даны две строки.
 * Написать функцию, которая вернёт True, если из первой строки можно получить вторую, совершив не более 1 изменения
 * (== удаление / замена символа).
 */

function isAlmostEqual(s1, s2) {
  const ln1 = s1.length;
  const ln2 = s2.length;

  if (ln1 - ln2 > 1) {
    return false;
  }

  if (ln1 === ln2) {
    let changes = 0;
    for (let i = 0; i < ln1; i++) {
      if (s1[i] !== s2[i]) {
        changes++;
      }
    }

    return changes <= 1;
  }

  let newS1 = '';
  for (let i = 0; i < ln1; i++) {
    newS1 = s1.slice(0, i) + s1.slice(i + 1);
    if (newS1 === s2) {
      return true;
    }
  }

  return false;
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
}

test(isAlmostEqual);

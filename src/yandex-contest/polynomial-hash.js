import assert from 'assert';

/**
 * Алле очень понравился алгоритм вычисления полиномиального хеша. Помогите ей написать функцию, вычисляющую хеш строки s.
 * В данной задаче необходимо использовать в качестве значений отдельных символов их коды в таблице ASCII.
 *
 * Формат ввода
 * В первой строке дано число a (1 ≤ a ≤ 1000) –— основание, по которому считается хеш.
 * Во второй строке дано число m (1 ≤ m ≤ 109) –— модуль.
 * В третьей строке дана строка s (0 ≤ |s| ≤ 106), состоящая из больших и маленьких латинских букв.
 *
 * Формат вывода
 * Выведите целое неотрицательное число –— хеш заданной строки.
 */

function hash(str, base, mod) {
  const ln = str.length;

  let hash = 0;
  for (let i = 0; i < ln; i++) {
    const cc = str.charCodeAt(i);
    hash = (hash * base + cc) % mod;
  }

  return hash;
}

function hash2(str, base, mod) {
  const ln = str.length;

  let powOfBase = 1;
  let hash = 0;
  for (let i = 0; i < ln; i++) {
    const cc = str.charCodeAt(i);
    hash = (hash + cc * powOfBase) % mod;
    powOfBase = (powOfBase * base) % mod;
  }

  return hash;
}

function randomStr(ln) {
  const haystack = 'abcdefghijklmnopqrstuvwxyz';
  const haystackLn = haystack.length;
  let str = '';
  while (ln--) {
    str += haystack[Math.floor(Math.random() * haystackLn)];
  }
  return str;
}

function breakHash(ln = 20) {
  const map = {};

  while (true) {
    const str = randomStr(ln);
    const strHash = hash2(str, 103, 100003);
    console.log(`${str} - ${strHash} - ${map[strHash]}`);
    if (Object.hasOwn(map, strHash)) {
      console.log(map[strHash]);
      console.log(str);
      console.log(Object.keys(map).length);
      break;
    }

    map[strHash] = str;
  }
}

function test(fn) {
  assert.deepStrictEqual(fn('a', 103, 100003), 97, fn.name);
  assert.deepStrictEqual(fn('abc', 103, 100003), 39236, fn.name);
  assert.deepStrictEqual(fn('abcdef', 103, 100003), 21757, fn.name);
}

test(hash);
breakHash();

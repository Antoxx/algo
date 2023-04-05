import assert from 'assert';

/**
 * Лишняя буква
 *
 * Васе очень нравятся задачи про строки, поэтому он придумал свою. Есть 2 строки s и t, состоящие только из строчных букв.
 * Строка t получена перемешиванием букв строки s и добавлением 1 буквы в случайную позицию. Нужно найти добавленную букву.
 *
 * Формат ввода
 * На вход подаются строки s и t, разделённые переносом строки. Длины строк не превосходят 1000 символов. Строки не бывают пустыми.
 *
 * Формат вывода
 * Выведите лишнюю букву.
 */

function getExcessiveLetter(s, t) {
  const hash = new Set();
  for (const char of s) {
    hash.add(char);
  }

  for (const char of t) {
    if (!hash.has(char)) {
      return char;
    }
  }

  return '';
}

assert.deepStrictEqual(getExcessiveLetter('abcd', 'abcde'), 'e');
assert.deepStrictEqual(getExcessiveLetter('abcd', 'dceab'), 'e');
assert.deepStrictEqual(getExcessiveLetter('abcd', 'ecdab'), 'e');
assert.deepStrictEqual(getExcessiveLetter('abcd', 'cdab'), '');

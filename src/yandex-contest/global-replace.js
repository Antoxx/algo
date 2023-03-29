import assert from 'assert';

/**
 * Условие
 * Напишите программу, которая будет заменять в тексте все вхождения строки s на строку t.
 * Гарантируется, что никакие два вхождения шаблона s не пересекаются друг с другом.
 *
 * Формат ввода
 * В первой строке дан текст —– это строка из строчных букв английского алфавита, длина которой не превышает 106.
 * Во второй строке записан шаблон s, вхождения которого будут заменены.
 * В третьей строке дана строка t, которая будет заменять вхождения.
 * Обе строки s и t состоят из строчных букв английского алфавита, длина каждой строки не превосходит 105.
 * Размер итоговой строки не превосходит 2⋅ 106.
 *
 * Формат вывода
 * В единственной строке выведите результат всех замен — текст, в котором все вхождения s заменены на t.
 */

function globalReplace(str, pattern, replacement) {
  let i = 0;
  let startIdx = -1;
  let j = 0;

  while (i < str.length) {
    if (str[i] === pattern[j]) {
      if (startIdx === -1) {
        startIdx = i;
      }

      if (j === pattern.length - 1) {
        if (startIdx > 0) {
          str = str.slice(0, startIdx) + replacement + str.slice(startIdx + pattern.length);
        } else {
          str = replacement + str.slice(startIdx + pattern.length);
        }

        i = startIdx + replacement.length;
        startIdx = -1;
        j = 0;
      } else {
        i++;
        j++;
      }
    } else {
      if (startIdx > -1) {
        startIdx = 0;
      }

      i++;
    }
  }

  return str;
}

assert.deepStrictEqual(globalReplace('pingping', 'i', 'o'), 'pongpong');
assert.deepStrictEqual(globalReplace('pingpong', 'ng', 'mpi'), 'pimpipompi');

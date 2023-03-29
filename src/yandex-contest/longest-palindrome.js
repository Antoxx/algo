import assert from 'assert';

/**
 *
 * Палиндром —– это строка, которая одинаково читается как слева направо, так и справа налево.
 * Из данной строки s путём удаления и перестановки букв надо получить палиндром максимальной длины.
 * Среди всех таких палиндромов надо получить лексикографически минимальный. Количество удалений и перестановок символов может быть любым.
 *
 * Формат ввода
 * В единственной строке дана строка s. Длина строки |s| ≤ 105. Строка состоит из строчных букв английского алфавита.
 *
 * Формат вывода
 * Выведите полученный палиндром. Заметьте, что ответ определяется однозначно.
 */

function longestPalindrome(str) {
  const hash = new Map();
  for (const s of str) {
    hash.set(s, (hash.get(s) || 0) + 1);
  }

  let begin = '';
  let mid = '';
  let end = '';

  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    if (!hash.has(char)) {
      continue;
    }

    const cnt = hash.get(char);
    if (cnt % 2 === 1 && mid.length === 0) {
      mid += char;
      hash.set(char, cnt - 1);
      i--;
    } else {
      for (let j = 0; j < Math.floor(cnt / 2); j++) {
        begin += char;
      }
    }
  }

  for (let i = begin.length - 1; i >= 0; i--) {
    end += begin[i];
  }

  return begin + mid + end;
}

function test(fn) {
  assert.deepStrictEqual(fn('aaaabb'), 'aabbaa', fn.name);
  assert.deepStrictEqual(fn('abccccdd'), 'ccdadcc', fn.name);
  assert.deepStrictEqual(fn('aaaebbd'), 'ababa', fn.name);
}

test(longestPalindrome);

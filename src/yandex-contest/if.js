import assert from 'assert';

/**
 * За многие годы заточения узник замка Иф проделал в стене прямоугольное отверстие размером D×E. Замок Иф сложен из кирпичей, размером A×B×C.
 * Определите, сможет ли узник выбрасывать кирпичи в море через это отверстие, если стороны кирпича должны быть параллельны сторонам отверстия.
 *
 * Формат ввода
 * Программа получает на вход числа A,B,C,D,E.
 *
 * Формат вывода
 * Программа должна вывести слово YES или NO.
 */

function ifPrisoner(a, b, c, d, e) {
  function sort(x, y) {
    return x < y ? [x, y] : [y, x];
  }

  // 2 меньшие стороны кирпича
  [a, b] = sort(a, b);
  [b, c] = sort(b, c);
  [a, b] = sort(a, b);

  // отсортируем стороны отверстия
  [d, e] = sort(d, e);

  return a <= d && b <= e ? 'YES' : 'NO';
}

assert.deepStrictEqual(ifPrisoner(1, 2, 3, 5, 5), 'YES');
assert.deepStrictEqual(ifPrisoner(8, 6, 2, 5, 5), 'NO');

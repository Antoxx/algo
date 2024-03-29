import assert from 'assert';

/**
 * Факторизация
 *
 * Основная теорема арифметики говорит: любое число раскладывается на произведение простых множителей единственным образом, с точностью до их перестановки.
 * Например:
 * Число 8 можно представить как 2 × 2 × 2.
 * Число 50 –— как 2 × 5 × 5 (или 5 × 5 × 2, или 5 × 2 × 5).
 * Три варианта отличаются лишь порядком следования множителей.
 * Разложение числа на простые множители называется факторизацией числа.
 *
 * Напишите программу, которая производит факторизацию переданного числа.
 *
 * Формат ввода
 * В единственной строке дано число n (2 ≤ n ≤ 109), которое нужно факторизовать.
 *
 * Формат вывода
 * Выведите в порядке неубывания простые множители, на которые раскладывается число n.
 */

function factorize(num) {
  let factors = [];
  let factor = 2;

  while (num >= factor) {
    while (num % factor === 0) {
      num = num / factor;
      factors.push(factor);
    }

    factor++;
  }

  return factors;
}

assert.deepStrictEqual(factorize(8), [2, 2, 2]);
assert.deepStrictEqual(factorize(50), [2, 5, 5]);
assert.deepStrictEqual(factorize(1), []);
assert.deepStrictEqual(factorize(11), [11]);
assert.deepStrictEqual(factorize(15), [3, 5]);

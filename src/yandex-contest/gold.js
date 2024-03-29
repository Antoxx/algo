import assert from 'assert';

/**
 * Вам удалось заключить неплохую сделку с лепреконами, поэтому они пустили вас в своё хранилище золотых слитков.
 * Все слитки имеют единую пробу, то есть стоимость 1 грамма золота в двух разных слитках одинакова.
 * В хранилище есть n слитков, вес i-го слитка равен wi кг. У вас есть рюкзак, вместимость которого M килограмм.
 *
 * Выясните максимальную суммарную массу золотых слитков, которую вы сможете унести.
 *
 * Формат ввода
 * В первой строке дано число слитков —– натуральное число n (1 ≤ n ≤ 1000) и вместимость рюкзака –— целое число M (0 ≤ M ≤ 10^4).
 * Во второй строке записано n натуральных чисел wi (1 ≤ wi ≤ 10^4) -— массы слитков.
 *
 * Формат вывода
 * Выведите единственное число — максимальную массу, которую можно забрать с собой.
 */

function maxKnapsackCost(bullions, maxWeight) {
  const weights = [...bullions].sort((a, b) => b - a);
  let gotWeight = 0;
  let leftWeight = maxWeight;

  for (const weight of weights) {
    if (leftWeight - weight >= 0) {
      leftWeight -= weight;
      gotWeight += weight;
    }

    if (leftWeight === 0) {
      break;
    }
  }

  return gotWeight;
}

assert.deepStrictEqual(maxKnapsackCost([3, 8, 1, 2, 5], 15), 15);

import assert from 'assert';

/**
 * Имеется калькулятор, который выполняет три операции:
 * - Прибавить к числу X единицу
 * - Умножить число X на 2
 * - Умножить число X на 3
 *
 * Определите, какое наименьшее число операций необходимо для того, чтобы получить из числа 1 заданное число N.
 * Выведите это число, и, на следующей строке, набор исполненных операций вида «111231».
 */

// not so cool - +1 path
function calculateIntuitive(num) {
  if (num === 1) {
    return '';
  }

  let dp = {};
  let tmp = num;
  let paths = [];
  while (tmp > 1) {
    if (tmp % 3 === 0) {
      dp[tmp / 3] = 3;
      tmp = tmp / 3;
    } else if (tmp % 2 === 0) {
      dp[tmp / 2] = 2;
      tmp = tmp / 2;
    } else {
      dp[tmp - 1] = 1;
      tmp = tmp - 1;
    }

    paths.push(tmp);
  }

  console.log(paths.reverse().join('-'));
  return Object.values(dp).reverse().join('');
}

function calculate(num) {
  if (num === 1) {
    return '';
  }

  let dp = [0, 0];
  let paths = [];
  let min;

  let i = 2;
  while (i <= num) {
    min = dp[i - 1] + 1;

    if (i % 2 === 0) {
      min = Math.min(min, dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      min = Math.min(min, dp[i / 3] + 1);
    }

    dp[i] = min;

    i++;
  }

  i = num;
  while (i > 1) {
    if (dp[i] === dp[i - 1] + 1) {
      paths.push(1);
      i--;
      continue;
    }

    if (i % 2 === 0 && dp[i] === dp[i / 2] + 1) {
      paths.push(2);
      i /= 2;
      continue;
    }

    paths.push(3);
    i /= 3;
  }

  // console.log(dp);
  // console.log(paths);

  // console.log(paths.join('-'));
  return paths.reverse().join('');
}

function test(fn) {
  // assert.deepStrictEqual(fn(2), '2', fn.name);
  // assert.deepStrictEqual(fn(3), '3', fn.name);
  // assert.deepStrictEqual(fn(4), '22', fn.name);
  // assert.deepStrictEqual(fn(5), '122', fn.name);
  // assert.deepStrictEqual(fn(6), '32', fn.name);
  // assert.deepStrictEqual(fn(7), '132', fn.name);
  // assert.deepStrictEqual(fn(8), '222', fn.name);
  // assert.deepStrictEqual(fn(9), '33', fn.name);
  // assert.deepStrictEqual(fn(96234), '33', fn.name);

  assert.deepStrictEqual(fn(2), '1', fn.name);
  assert.deepStrictEqual(fn(3), '3', fn.name);
  assert.deepStrictEqual(fn(4), '31', fn.name);
  assert.deepStrictEqual(fn(5), '311', fn.name);
  assert.deepStrictEqual(fn(6), '32', fn.name);
  assert.deepStrictEqual(fn(7), '321', fn.name);
  assert.deepStrictEqual(fn(8), '312', fn.name);
  assert.deepStrictEqual(fn(9), '33', fn.name);
  assert.deepStrictEqual(fn(96234), '33113333332132', fn.name);
}

test(calculate);

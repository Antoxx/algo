import assert from 'assert';

/**
 * Задание связано с обратной польской нотацией. Она используется для парсинга арифметических выражений.
 * Ещё её иногда называют постфиксной нотацией. В постфиксной нотации операнды расположены перед знаками операций.
 *
 * Формат ввода
 * В единственной строке дано выражение, записанное в обратной польской нотации. Числа и арифметические операции записаны через пробел.
 * На вход могут подаваться операции: +, -, *, / и числа, по модулю не превосходящие 10000.
 * Операция / является математическим целочисленным делением с округлением вниз.
 * Гарантируется, что значение промежуточных выражений в тестовых данных по модулю не больше 50000.
 *
 * Формат вывода
 * Выведите единственное число - значение выражения
 */

class Calculator {
  stack = [];
  hash = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => Math.floor(x / y),
  };

  constructor() {}

  calc(command) {
    const { stack, hash } = this;
    const args = command.split(' ');

    for (const arg of args) {
      if (Object.hasOwn(hash, arg)) {
        const y = Number(stack.pop());
        const x = Number(stack.pop());
        const res = hash[arg](x, y);
        stack.push(res);
      } else {
        stack.push(arg);
      }
    }

    return stack.pop();
  }
}

const calc = new Calculator();

assert.deepStrictEqual(calc.calc('3 4 +'), 7);
assert.deepStrictEqual(calc.calc('12 5 /'), 2);
assert.deepStrictEqual(calc.calc('-1 3 /'), -1);
assert.deepStrictEqual(calc.calc('10 2 4 * -'), 2);
assert.deepStrictEqual(calc.calc('2 1 + 3 *'), 9);
assert.deepStrictEqual(calc.calc('7 2 + 4 * 2 +'), 38);

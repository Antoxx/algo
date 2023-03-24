import assert from 'assert';

/**
 * из 10 в 2 систему счисления
 */

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }

  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

function test(fn) {
  assert.deepStrictEqual(fn(0), '0', fn.name);
  assert.deepStrictEqual(fn(1), '1', fn.name);
  assert.deepStrictEqual(fn(7), '111', fn.name);
  assert.deepStrictEqual(fn(11), '1011', fn.name);
}

test(decimalToBinary);

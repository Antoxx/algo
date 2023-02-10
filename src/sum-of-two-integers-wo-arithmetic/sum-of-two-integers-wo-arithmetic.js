import assert from 'assert';

/**
 * Sum = Sum without carry + Carry
 * 123 + 789 = 802 + 110 = 912
 *
 * "Sum without carry" in binary is XOR with truth table 0110 (1 ^ 1 = 0)
 * Carry in binary is AND with truth table 0001 (1 ^ 1 = 1)
 */
function sumOfTwoIntegersWithoutArithmetic(x, y) {
  while (y != 0) {
    let carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }
  return x;
}

function test(fn) {
  assert.deepStrictEqual(fn(0, 0), 0, fn.name);
  assert.deepStrictEqual(fn(0, 1), 1, fn.name);
  assert.deepStrictEqual(fn(1, 1), 2, fn.name);
  assert.deepStrictEqual(fn(4, 5), 9, fn.name);
  assert.deepStrictEqual(fn(3, 3), 6, fn.name);
  assert.deepStrictEqual(fn(100, 11), 111, fn.name);
}

test(sumOfTwoIntegersWithoutArithmetic);

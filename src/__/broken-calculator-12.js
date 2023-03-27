import assert from 'assert';

/**
 * 991. Broken Calculator
 *
 * There is a broken calculator that has the integer startValue on its display initially. In one operation, you can:
 * - multiply the number on display by 2, or
 * - subtract 1 from the number on display.
 *
 * Given two integers startValue and target, return the minimum number of operations needed to display target on the calculator.
 *
 * https://leetcode.com/problems/broken-calculator/
 */

function brokenCalc(startValue, target) {
  if (num === 1) {
    return '';
  }
}

function test(fn) {
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

test(brokenCalc);

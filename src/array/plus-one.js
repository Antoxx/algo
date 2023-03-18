import assert from 'assert';

/**
 * 66. Plus One
 *
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 *
 * https://leetcode.com/problems/plus-one/
 *
 */

function plusOne(digits) {
  const ln = digits.length;
  if (ln === 0) {
    return [1];
  }

  let carry = false;
  let idx = ln - 1;

  digits[idx] += 1;

  while (idx >= 0) {
    let sum = digits[idx] + (carry ? 1 : 0);

    carry = sum >= 10;
    if (!carry) {
      digits[idx] = sum;
      break;
    }

    digits[idx] = sum - 10;

    if (idx === 0) {
      digits.unshift(1);
      break;
    }

    idx--;
  }

  return digits;
}

function plusOneBigInt(digits) {
  let value = BigInt(digits.join('')) + 1n;
  return value.toString().split('').map(Number);
}

function plusOneSimple(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
}

function test(fn) {
  assert.deepStrictEqual(fn([1, 2, 3]), [1, 2, 4], fn.name);
  assert.deepStrictEqual(fn([4, 3, 2, 1]), [4, 3, 2, 2], fn.name);
  assert.deepStrictEqual(fn([9]), [1, 0], fn.name);
  assert.deepStrictEqual(fn([9, 9, 9]), [1, 0, 0, 0], fn.name);
  assert.deepStrictEqual(fn([8, 9, 9, 9]), [9, 0, 0, 0], fn.name);
}

test(plusOne);
test(plusOneBigInt);
test(plusOneSimple);

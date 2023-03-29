import assert from 'assert';

/**
 * 561. Array Partition
 *
 * Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
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
  assert.deepStrictEqual(fn([1,4,3,2]), [1, 2, 4], fn.name);
}


Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.
Example 2:

Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.

test(plusOne);
test(plusOneBigInt);
test(plusOneSimple);

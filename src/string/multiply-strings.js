import assert from 'assert';

/**
 * 43. Multiply Strings
 *
 * Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * https://leetcode.com/problems/multiply-strings/
 */

function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const ln1 = num1.length;
  const ln2 = num2.length;
  const dp = Array(ln1 + ln2).fill(0);

  for (let i = ln1 - 1; i >= 0; i--) {
    for (let j = ln2 - 1; j >= 0; j--) {
      const prevRemainder = dp[i + j + 1];
      const product = num1[i] * num2[j] + prevRemainder;
      const unitsDigit = product % 10;
      const carryOver = Math.floor(product / 10);

      dp[i + j + 1] = unitsDigit;
      dp[i + j] += carryOver;
    }
  }

  // Delete first zero if needed
  if (dp[0] === 0) {
    dp.shift();
  }

  return dp.join('');
}

function test(fn) {
  assert.deepStrictEqual(fn('2', '3'), '6', fn.name);
  assert.deepStrictEqual(fn('123', '45'), '5535', fn.name);
  assert.deepStrictEqual(fn('123', '456'), '56088', fn.name);
  assert.deepStrictEqual(fn('123', '0'), '0', fn.name);
}

test(multiply);

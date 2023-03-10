import assert from 'assert';

/**
 * 67. Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * https://leetcode.com/problems/add-binary/
 */

function addBinary(a, b) {
  let ans = '';

  const lnDiff = a.length - b.length;
  if (lnDiff > 0) {
    b = '0'.repeat(lnDiff) + b;
  } else if (lnDiff < 0) {
    a = '0'.repeat(Math.abs(lnDiff)) + a;
  }

  let prevCarry = false;
  let nextCarry = false;
  let n1 = 0;
  let n2 = 0;
  let sum = '';

  for (let i = a.length - 1; i >= 0; i--) {
    n1 = a[i] === '1' ? 1 : 0;
    n2 = b[i] === '1' ? 1 : 0;

    nextCarry = (n1 && n2) || ((n1 || n2) && prevCarry);

    if (n1 && n2) {
      sum = prevCarry ? 1 : 0;
    } else if (n1 || n2) {
      sum = prevCarry ? 0 : 1;
    } else {
      sum = prevCarry ? 1 : 0;
    }

    prevCarry = nextCarry;
    nextCarry = false;

    ans = sum + ans;
  }

  if (prevCarry) {
    ans = 1 + ans;
  }

  return ans;
}

function addBinarySimple(a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}

function addBinaryBigInt(a, b) {
  let ans = '';
  let carry = 0;

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    const sum = (+a[i] || 0) + (+b[j] || 0) + carry;
    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);
  }

  if (carry) {
    ans = '1' + ans;
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn('11', '1'), '100', fn.name);
  assert.deepStrictEqual(fn('111', '111'), '1110', fn.name);
  assert.deepStrictEqual(fn('1010', '1011'), '10101', fn.name);
  assert.deepStrictEqual(
    fn(
      '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
      '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011',
    ),
    '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000',
    fn.name,
  );
}

test(addBinary);
test(addBinarySimple);
test(addBinaryBigInt);

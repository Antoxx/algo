import assert from 'assert';

/**
 * 190. Reverse Bits
 *
 * Easy
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * https://leetcode.com/problems/reverse-bits/
 */

function reverseBits(n) {
  return parseInt(n.toString(2).split('').reverse().join('').padEnd(32, '0'), 2);
}

function test(fn) {
  assert.deepStrictEqual(fn(43261596), 964176192, fn.name);
  assert.deepStrictEqual(fn(4294967293), 3221225471, fn.name);
}

test(reverseBits);

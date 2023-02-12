import assert from 'assert';

function isPalindrome(num) {
  if (num < 10) {
    return false;
  }

  let temp = num;
  let reversed = 0;
  while (temp) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return num === reversed;
}

function test(fn) {
  assert.deepStrictEqual(fn(0), false, fn.name);
  assert.deepStrictEqual(fn(11), true, fn.name);
  assert.deepStrictEqual(fn(121), true, fn.name);
  assert.deepStrictEqual(fn(11211), true, fn.name);
  assert.deepStrictEqual(fn(1234), false, fn.name);
}

test(isPalindrome);

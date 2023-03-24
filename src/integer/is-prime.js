import assert from 'assert';

/**
 * An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number.
 *
 * For example, 2, 3, 5, 7, 11, and 13 are all primes.
 */

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let n = 2; n < num; n++) {
    const res = num / n;
    if (Math.trunc(res) === res) {
      return false;
    }
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn(0), false, fn.name);
  assert.deepStrictEqual(fn(1), false, fn.name);
  assert.deepStrictEqual(fn(2), true, fn.name);
  assert.deepStrictEqual(fn(3), true, fn.name);
  assert.deepStrictEqual(fn(4), false, fn.name);
  assert.deepStrictEqual(fn(13), true, fn.name);
  assert.deepStrictEqual(fn(120), false, fn.name);
}

test(isPrime);

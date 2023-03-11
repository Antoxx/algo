import assert from 'assert';

/**
 * Fibonacci
 */

// cycle
function fiboCycle(n) {
  let prev1 = 1;
  let prev2 = 1;
  let curr = 0;
  if (n < 3) {
    return prev1;
  }

  for (let i = 3; i <= n; i++) {
    curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }

  return curr;
}

// DP bottom-up
function fiboDPBU(n) {
  if (n < 3) {
    return 1;
  }

  const dp = [1, 1];
  for (let i = 2; i < n; i++) {
    dp[i % 2] = dp[1] + dp[0];
  }

  return dp[(n - 1) % 2];
}

// DP top-down + cache
function fiboRecursive(n) {
  const cache = {};

  function fibo(n) {
    if (cache[n]) {
      return cache[n];
    }

    const num = n > 2 ? fibo(n - 2) + fibo(n - 1) : 1;
    cache[n] = num;
    return num;
  }

  return fibo(n);
}

function test(fn) {
  assert.deepStrictEqual(fn(1), 1, fn.name);
  assert.deepStrictEqual(fn(3), 2, fn.name);
  assert.deepStrictEqual(fn(4), 3, fn.name);
  assert.deepStrictEqual(fn(10), 55, fn.name);
}

test(fiboCycle);
test(fiboRecursive);
test(fiboDPBU);

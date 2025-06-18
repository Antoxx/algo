import assert from 'assert';

// Palindromes are "wow", "kayak", "rotator", "anna", "noon"

function isPalindromeSimple(str) {
  let cnt = str.length;
  if (cnt === 0) {
    return true;
  }
  if (cnt <= 1) {
    return false;
  }

  const len = Math.floor(cnt / 2);
  let i = 0;
  while (i <= len - 1) {
    if (str[i] !== str[cnt - i - 1]) {
      return false;
    }

    i++;
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn(''), true, fn.name);

  ['wow', 'kayak', 'rotator', 'anna', 'noon'].forEach((w) => {
    assert.deepStrictEqual(fn(w), true, fn.name);
  });

  ['this', 'is', 'not', 'palindrome'].forEach((w) => {
    assert.deepStrictEqual(fn(w), false, fn.name);
  });
}

test(isPalindromeSimple);

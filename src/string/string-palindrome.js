import assert from 'assert';

// Palindromes are "wow", "kayak", "rotator", "anna", "noon"

function isPalindrome(str) {
  let cnt = str.length;
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

function isPalindromeTwoPointers(str) {
  let cnt = str.length;
  if (cnt <= 1) {
    return false;
  }

  let left = 0;
  let right = cnt - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function test(fn) {
  assert.deepStrictEqual(fn(''), false, fn.name);

  ['wow', 'kayak', 'rotator', 'anna', 'noon'].forEach((w) => {
    assert.deepStrictEqual(fn(w), true, fn.name);
  });

  ['this', 'is', 'not', 'a', 'palindrome'].forEach((w) => {
    assert.deepStrictEqual(fn(w), false, fn.name);
  });
}

test(isPalindrome);
test(isPalindromeTwoPointers);

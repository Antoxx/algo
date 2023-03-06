import assert from 'assert';

/**
 * String to Integer (atoi)
 *
 * https://leetcode.com/problems/string-to-integer-atoi/
 */

function myAtoi(s) {
  const ln = s.length;
  if (ln === 0) {
    return 0;
  }

  const nums = [];
  let numsStarted = false;
  let sign = null;
  for (let i = 0; i < ln; i++) {
    if (s[i] === ' ') {
      if (numsStarted) {
        break;
      } else if (sign) {
        return 0;
      } else {
        continue;
      }
    }

    if (s[i] === '-' || s[i] === '+') {
      if (numsStarted) {
        break;
      }

      if (sign) {
        return 0;
      } else {
        sign = s[i] === '-' ? -1 : 1;
        continue;
      }
    }

    const num = s[i] * 1;
    if (Number.isNaN(num)) {
      break;
    }

    numsStarted = true;
    nums.push(num);
  }

  let ans = 0;
  for (const num of nums) {
    ans = ans * 10 + num;
  }

  if (sign) {
    ans *= sign;
  }

  if (ans > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }

  if (ans < -(2 ** 31)) {
    return -(2 ** 31);
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn('42'), 42, fn.name);
  assert.deepStrictEqual(fn('   -42'), -42, fn.name);
  assert.deepStrictEqual(fn('4193 with words'), 4193, fn.name);
  assert.deepStrictEqual(fn('+-12'), 0, fn.name);
  assert.deepStrictEqual(fn('00000-42a1234'), 0, fn.name);
  assert.deepStrictEqual(fn('+0 123'), 0, fn.name);
  assert.deepStrictEqual(fn('-5-'), -5, fn.name);
  assert.deepStrictEqual(fn('+  413'), 0, fn.name);
  assert.deepStrictEqual(fn('-88827   5655  U'), -88827, fn.name);
}

test(myAtoi);

import assert from 'assert';

/**
 * https://leetcode.com/problems/valid-parentheses/
 */

function validParenthesis(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      continue;
    }

    const lastStackEl = stack.pop();
    if (
      (char === ')' && lastStackEl !== '(') ||
      (char === ']' && lastStackEl !== '[') ||
      (char === '}' && lastStackEl !== '{')
    ) {
      return false;
    }
  }

  return !stack.length;
}

function test(fn) {
  assert.deepStrictEqual(fn('()'), true, fn.name);
  assert.deepStrictEqual(fn('()[]{}'), true, fn.name);
  assert.deepStrictEqual(fn('(]'), false, fn.name);
  assert.deepStrictEqual(fn('([()])'), true, fn.name);
}

test(validParenthesis);

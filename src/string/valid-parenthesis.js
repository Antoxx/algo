import assert from 'assert';

/**
 * 20. Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
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

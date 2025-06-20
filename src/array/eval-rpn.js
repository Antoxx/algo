import assert from 'assert';

/**
 * 150. Evaluate Reverse Polish Notation
 *
 * Medium
 *
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

function evalRPN(tokens) {
  const hash = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => Math.trunc(x / y),
  };
  const stack = [];

  for (const token of tokens) {
    if (Object.hasOwn(hash, token)) {
      const y = Number(stack.pop());
      const x = Number(stack.pop());
      const res = hash[token](x, y);
      console.log(`${x} ${token} ${y} = ${res}`);
      stack.push(res);
    } else {
      stack.push(token);
    }
  }

  return stack.pop();
}

assert.deepStrictEqual(evalRPN(['2', '1', '+', '3', '*']), 9);
assert.deepStrictEqual(evalRPN(['4', '13', '5', '/', '+']), 6);
assert.deepStrictEqual(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']),
  22,
);

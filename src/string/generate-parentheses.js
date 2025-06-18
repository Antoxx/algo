/**
 * 22. Generate Parentheses
 *
 * Medium
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Generate all well-formed bracket sequences using parenthesis "(" and ")" with the length equal to 2*n:
 * n = 1
 * ()
 *
 * n = 2
 * ()()
 * (())
 *
 * n = 3
 * ()()()
 * (())()
 * ()(())
 * (()())
 * ((()))
 *
 * Original for 3:
 *
 * ((()))
 * (()())
 * (())()
 * ()(())
 * ()()()
 */

function generateParenthesis(n) {
  const ans = [];

  function generate(n, open = 0, closed = 0, current = '') {
    if (n === 0 || (current.length > 0 && current.length >= 2 * n)) {
      console.log(current);
      return ans.push(current);
    }

    if (open < n) {
      generate(n, open + 1, closed, current + '(');
    }

    if (closed < open) {
      generate(n, open, closed + 1, current + ')');
    }
  }

  generate(n);

  return ans;
}

generateParenthesis(0);
generateParenthesis(1);
generateParenthesis(2);
generateParenthesis(3);

/**
 * Generate all well-formed bracket sequences using parenthesis "(" and ")" with the length equal to 2\*n:
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
 */

function generateBracketSequences(n, open = 0, closed = 0, current = '') {
  if (n === 0 || (current.length > 0 && current.length >= 2 * n)) {
    console.log(current);
    return current;
  }

  if (open < n) {
    generateBracketSequences(n, open + 1, closed, current + '(');
  }

  if (closed < open) {
    generateBracketSequences(n, open, closed + 1, current + ')');
  }
}

generateBracketSequences(0);
generateBracketSequences(1);
generateBracketSequences(2);

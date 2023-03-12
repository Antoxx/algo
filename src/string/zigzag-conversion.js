import assert from 'assert';

/**
 * 6. Zigzag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/
 */

function convert(s, numRows) {
  const ln = s.length;
  if (ln === 0 || ln === numRows) {
    return s;
  }

  const rows = [];
  let rowIdx = 0;
  let step = 1;

  for (let i = 0; i < ln; i++) {
    rows[rowIdx] = rows[rowIdx] ? rows[rowIdx] + s[i] : s[i];
    rowIdx += step;

    if (rowIdx === numRows - 1 || rowIdx === 0) {
      step *= -1;
    }
  }

  return rows.join('');
}

function test(fn) {
  assert.deepStrictEqual(fn('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR', fn.name);
  assert.deepStrictEqual(fn('PAYPALISHIRING', 4), 'PINALSIGYAHRPI', fn.name);
}

test(convert);

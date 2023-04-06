/**
 * Слияние отрезков:
 * Вход: [1, 3] [100, 200] [2, 4]
 * Выход: [1, 4] [100, 200]
 */

import assert from 'assert';

function mergeRanges(ranges) {
  const ans = [ranges[0]];

  for (let i = 1; i < ranges.length; i++) {
    const [start, end] = ranges[i];

    let found = false;
    const tmpLn = ans.length;
    for (let j = 0; j < tmpLn; j++) {
      let [s, e] = ans[j];

      // beyond current range
      if (start > e || end < s) {
        continue;
      }

      // intersection
      if (start <= e && e <= end) {
        ans[j] = [s, end];
      } else {
        ans[j] = [start, e];
      }

      found = true;
    }

    if (!found) {
      ans.push(ranges[i]);
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(
    fn([
      [1, 3],
      [100, 200],
      [2, 4],
    ]),
    [
      [1, 4],
      [100, 200],
    ],
    fn.name,
  );

  assert.deepStrictEqual(
    fn([
      [1, 3],
      [2, 5],
      [2, 8],
    ]),
    [[1, 8]],
    fn.name,
  );
}

test(mergeRanges);

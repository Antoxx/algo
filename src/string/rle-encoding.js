import assert from 'assert';

/**
 * RLE (run-length encoding)
 */

function rleEncode(s) {
  const ln = s.length;
  if (ln <= 1) {
    return s;
  }

  let ans = '';
  let lastChar = s[0];
  let lastCnt = 0;
  for (const char of s) {
    if (char === lastChar) {
      lastCnt++;
    } else {
      ans += `${lastChar}${lastCnt > 1 ? lastCnt : ''}`;
      lastChar = char;
      lastCnt = 1;
    }
  }

  ans += `${lastChar}${lastCnt > 1 ? lastCnt : ''}`;

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(''), '', fn.name);
  assert.deepStrictEqual(fn('a'), 'a', fn.name);
  assert.deepStrictEqual(fn('aabbbcdd'), 'a2b3cd2', fn.name);
}

test(rleEncode);

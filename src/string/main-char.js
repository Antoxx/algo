import assert from 'assert';

/**
 *
 */

function findMainChar(str) {
  const hash = {};
  let ans = '';
  let ansCnt = 0;

  for (let c of str) {
    if (hash.hasOwnProperty(c)) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }

    if (hash[c] > ansCnt) {
      ans = c;
      ansCnt = hash[c];
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn(''), '', fn.name);
  assert.deepStrictEqual(fn('ababa'), 'a', fn.name);
  assert.deepStrictEqual(fn('aabbbcdd'), 'b', fn.name);
}

test(findMainChar);

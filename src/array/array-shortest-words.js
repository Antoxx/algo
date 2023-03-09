import assert from 'assert';

/**
 * Find shortest words
 */

function arrayShortestWords(arr) {
  const ln = arr.length;
  if (ln <= 1) {
    return arr;
  }

  let minLn = arr[0].length;
  for (const str of arr) {
    if (str.length < minLn) {
      minLn = str.length;
    }
  }

  const ans = [];
  for (const str of arr) {
    if (str.length === minLn) {
      ans.push(str);
    }
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(fn([]), [], fn.name);
  assert.deepStrictEqual(fn(['aaa']), ['aaa'], fn.name);
  assert.deepStrictEqual(fn(['aa', 'bb', 'c', 'd', 'eee']), ['c', 'd'], fn.name);
}

test(arrayShortestWords);

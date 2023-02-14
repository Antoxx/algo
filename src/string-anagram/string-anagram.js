import assert from 'assert';

function areAnagrams(str1, str2) {
  let res = true;

  for (const char of str1) {
    if (!str2.includes(char)) {
      return false;
    }
  }

  return res;
}

function test(fn) {
  assert.deepStrictEqual(fn('пила', 'липа'), true, fn.name);
  assert.deepStrictEqual(fn('пост', 'стоп'), true, fn.name);
  assert.deepStrictEqual(fn('abcd', 'dcaB'), false, fn.name);
  assert.deepStrictEqual(fn('abcd', 'mnmn'), false, fn.name);
}

test(areAnagrams);

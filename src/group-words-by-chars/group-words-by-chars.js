import assert from 'assert';

function groupWordsByChars(arr) {
  const res = {};
  for (const str of arr) {
    const normStr = Array.from(str.toLowerCase()).sort().join('');
    if (!res[normStr]) {
      res[normStr] = [];
    }

    res[normStr].push(str);
  }

  return Object.values(res).map((r) => r.sort());
}

function test(fn) {
  assert.deepStrictEqual(
    fn(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']),
    [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']],
    fn.name,
  );
  assert.deepStrictEqual(
    fn(['abc', 'ABC', 'cab', 'aaa', 'bbb']),
    [['ABC', 'abc', 'cab'], ['aaa'], ['bbb']],
    fn.name,
  );
}

test(groupWordsByChars);

import assert from 'assert';

/**
 * Sample Input ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Sample Output [ ["ate", "eat", "tea"], ["nat", "tan"], ["bat"] ]
 * Т.е. сгруппировать слова по "общим буквам".
 */

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

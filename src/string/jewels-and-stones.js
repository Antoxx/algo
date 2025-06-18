import assert from 'assert';

/**
 * 771. Jewels and Stones
 *
 * Easy
 *
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
 * Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * https://leetcode.com/problems/jewels-and-stones/
 */

function numJewelsInStones(jewels, stones) {
  const hash = new Set(jewels);
  let ans = 0;
  for (let st of stones) {
    if (hash.has(st)) {
      ans++;
    }
  }

  return ans;
}

function numJewelsInStonesRegexp(jewels, stones) {
  const re = new RegExp(`[${jewels}]`, 'g');
  const m = stones.match(re);
  return m ? m.length : 0;
}

function test(fn) {
  assert.deepStrictEqual(fn('aA', 'aAAbbbb'), 3, fn.name);
  assert.deepStrictEqual(fn('z', 'ZZ'), 0, fn.name);
}

test(numJewelsInStones);
test(numJewelsInStonesRegexp);

import assert from 'assert';

/**
 * 2418. Sort the People
 *
 * You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
 * For each index i, names[i] and heights[i] denote the name and height of the ith person.
 * Return names sorted in descending order by the people's heights.
 *
 * https://leetcode.com/problems/sort-colors/
 */

function sortPeople(names, heights) {
  return names
    .map((name, idx) => ({ name, height: heights[idx] }))
    .sort((a, b) => b.height - a.height)
    .map(({ name }) => name);
}

function test(fn) {
  assert.deepStrictEqual(
    fn(['Mary', 'John', 'Emma'], [180, 165, 170]),
    ['Mary', 'Emma', 'John'],
    fn.name,
  );
  assert.deepStrictEqual(
    fn(['Alice', 'Bob', 'Bob'], [155, 185, 150]),
    ['Bob', 'Alice', 'Bob'],
    fn.name,
  );
}

test(sortPeople);

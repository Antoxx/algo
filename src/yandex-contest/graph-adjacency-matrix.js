import assert from 'assert';

/**
 * На этот раз список рёбер ориентированного графа надо переводить в матрицу смежности.
 * Конечно же, Алла попросила вас помочь написать программу для этого.
 *
 * Формат ввода
 * В первой строке дано число вершин n (1 ≤ n ≤ 100) и число ребер m (1 ≤ m ≤ n(n-1)).
 * В следующих m строках заданы ребра в виде пар вершин (u,v), если ребро ведет от u к v.
 *
 * Формат вывода
 * Выведите матрицу смежности n на n. На пересечении i-й строки и j-го столбца стоит единица, если есть ребро, ведущее из i в j.
 */

function adjacencyMatrixFromEdgeList(nodeNum, edgeList) {
  const ans = [];
  let ln = nodeNum;
  while (ln--) {
    ans.push(Array(nodeNum).fill(0));
  }

  for (const [from, to] of edgeList) {
    ans[from - 1][to - 1] = 1;
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(
    fn(5, [
      [1, 3],
      [2, 3],
      [5, 2],
    ]),
    [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ],
    fn.name,
  );
}

test(adjacencyMatrixFromEdgeList);

import assert from 'assert';

/**
 * Помогите Алле написать программу, которая по списку рёбер графа будет строить его список смежности.
 *
 * Формат ввода
 * В первой строке дано число вершин n (1 ≤ n ≤ 100) и число ребер m (1 ≤ m ≤ n(n-1)).
 * В следующих m строках заданы ребра в виде пар вершин (u,v), если ребро ведет от u к v.
 *
 * Формат вывода
 * Выведите информацию о рёбрах, исходящих из каждой вершины.
 * В строке i надо написать число рёбер, исходящих из вершины i, а затем перечислить вершины,
 * в которые ведут эти рёбра –— в порядке возрастания их номеров.
 */

function adjacencyListFromEdgeList(nodeNum, edgeList) {
  const ans = [];
  const edgeMap = edgeList.reduce((acc, [start, end]) => {
    if (!acc[start]) {
      acc[start] = [];
    }

    acc[start].push(end);

    return acc;
  }, {});

  for (let idx = 1; idx <= nodeNum; idx++) {
    let res = [0];
    if (edgeMap[idx]) {
      res = [edgeMap[idx].length, edgeMap[idx].join(',')];
    }

    ans.push(res);
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
    [[1, '3'], [1, '3'], [0], [0], [1, '2']],
    fn.name,
  );
}

test(adjacencyListFromEdgeList);

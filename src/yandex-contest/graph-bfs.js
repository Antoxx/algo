import assert from 'assert';

/**
 * Условие
 * Задан неориентированный граф. Обойдите с помощью BFS все вершины, достижимые из заданной вершины s, и выведите их в порядке обхода,
 * если начинать обход из s.
 *
 * Формат ввода
 * В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105). Далее в m строках описаны рёбра графа.
 * Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n). В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n).
 * В графе нет петель и кратных рёбер.
 *
 * Формат вывода
 * Выведите вершины в порядке обхода, считая что при запуске от каждой конкретной вершины её соседи будут рассматриваться в порядке возрастания
 * (то есть если вершина 2 соединена с 1 и 3, то сначала обход пойдёт в 1, а уже потом в 3).
 */

function bfs(edgeList, firstNode) {
  const edgeMap = edgeList.reduce((acc, [from, to]) => {
    if (acc[from]) {
      acc[from].push(to);
      acc[from].sort((a, b) => a - b);
    } else {
      acc[from] = [to];
    }

    if (acc[to]) {
      acc[to].push(from);
      acc[to].sort((a, b) => a - b);
    } else {
      acc[to] = [from];
    }

    return acc;
  }, {});

  if (!edgeMap[firstNode]) {
    return [];
  }

  const ans = new Set([firstNode]);
  const queue = edgeMap[firstNode];

  while (queue.length) {
    const node = queue.shift();
    if (ans.has(node)) {
      continue;
    }

    ans.add(node);

    queue.push(...edgeMap[node]);
  }

  return [...ans];
}

function test(fn) {
  assert.deepStrictEqual(
    fn(
      [
        [3, 2],
        [4, 3],
        [1, 4],
        [1, 2],
      ],
      3,
    ),
    [3, 2, 4, 1],
    fn.name,
  );
}

test(bfs);

import assert from 'assert';

/**
 * Условие
 * Вам дан неориентированный граф. Найдите его компоненты связности.
 *
 * Формат ввода
 * В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105). Далее в m строках описаны рёбра графа.
 * Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n). В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n).
 * В графе нет петель и кратных рёбер.
 *
 * Формат вывода
 * Выведите все компоненты связности в следующем формате: в первой строке выведите общее количество компонент.
 * Затем на отдельных строках выведите вершины каждой компоненты, отсортированные по возрастанию номеров.
 * Компоненты между собой упорядочивайте по номеру первой вершины.
 */

function connectivity(nodeNum, edgeList) {
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

  const ans = [];

  const visited = new Set();
  for (let node = 1; node <= nodeNum; node++) {
    if (visited.has(node)) {
      continue;
    }

    if (!edgeMap[node]) {
      ans.push([node]);
      continue;
    }

    const res = [];
    const queue = [node];
    while (queue.length) {
      const tmp = queue.shift();
      if (visited.has(tmp)) {
        continue;
      }

      res.push(tmp);
      visited.add(tmp);

      if (!edgeMap[tmp]) {
        continue;
      }

      queue.unshift(...edgeMap[tmp]);
    }

    ans.push(res);
  }

  return ans;
}

function test(fn) {
  assert.deepStrictEqual(
    fn(6, [
      [1, 2],
      [6, 5],
      [2, 3],
    ]),
    [[1, 2, 3], [4], [5, 6]],
    fn.name,
  );
}

test(connectivity);

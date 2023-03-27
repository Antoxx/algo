import assert from 'assert';

// Breadth-first search (BFS) for graph

/**
 *         a
 *     /      \
 *   b         c
 *   |      /     \
 *   |    d        e
 *   \  /         /
 *    f ----------
 *   |
 *  g
 */

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function dfs(graph, start, end) {
  let visited = [];
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.at(-1);

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    }

    queue = [...queue, ...graph[current].reverse()];

    // const current = queue.shift();
  }

  return false;
}

function test(fn) {
  assert.deepStrictEqual(fn(graph, 'a', 'e'), true, fn.name);
  assert.deepStrictEqual(fn(graph, 'a', 'z'), false, fn.name);
}

test(dfs);

import assert from 'assert';

// Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, road networks.

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function dijkstra(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }

  return false;
}

function test(fn) {
  assert.deepStrictEqual(fn(graph, 'a', 'e'), true, fn.name);
  assert.deepStrictEqual(fn(graph, 'a', 'z'), false, fn.name);
}

test(dijkstra);

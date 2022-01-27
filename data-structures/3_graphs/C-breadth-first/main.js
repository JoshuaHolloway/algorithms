// Graph - Breadth First Search

// ==============================================

const breadthFirstPrintRecursive = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift(); // remove first element
    console.log(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor); // push to last element
    }

    // queue.push('x');
  }
};

// ==============================================

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// ==============================================

breadthFirstPrintRecursive(graph, 'a'); // abdfce

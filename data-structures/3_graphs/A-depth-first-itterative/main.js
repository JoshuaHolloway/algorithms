// Graph - Depth First Search

// ==============================================

const depthFirstPrintItterative = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    // -Process node when it leaves the stack

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

// ==============================================

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// ==============================================

depthFirstPrintItterative(graph, 'a'); // abdfce

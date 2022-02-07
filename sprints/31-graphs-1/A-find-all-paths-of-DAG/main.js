// You are given a directed acyclic graph (DAG) that contains N nodes.

// Write a function that can find all the possible paths from node 0 to node N - 1.

// graph[a] is a list of all nodes b for which the edge a -> b exists.

// Note: The results must be returned in sorted order. You can use any built-in sort method on the results array at the end of your function before returning.

// Example:
//  -Input: graph = [[1, 2],[3],[3],[4],[]]
//  -Output: [[0,1,3,4], [0,2,3,4]]

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

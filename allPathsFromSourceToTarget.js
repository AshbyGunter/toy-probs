/*
            All Paths From Source to Target problem from leetcode: leetcode.com

O: an array, made of arrays that show all paths from the first node in the given graph to the last node, keeping each path internally in order, but the different paths can be in any order
I: a graph, expressed as an array with each index being a node and each element being a list of directed edges to other nodes
    the graph is acyclic and directed
C: none given
E: there may not be a valid path,
    there may be nodes with no edges,
    there are no cycles in the graph to worry about

Plan:
dykstra? ... will try first without looking up any algorithms

could use recursive dfs; logic would be less complicated without having to worry about cycles

recursively follow 1st available edge from the start
store the path in a stack
if it reaches the end, add that whole stack path to the results
backtrack to previous node and try next edge
store the path in a stack
if it reaches the end, add that whole stack path to the results
repeat until there are no more edges to explore


[[1,2], [3], [3], []]
0--->1
|    |
v    v
2--->3

call with 0, []
[0], not last node
loop edges, node 1
  dfs call with 1, [0]
  now path [0,1], not the last node
  loop througth edges, node 3
    dfs call with 3, [0.1]
    now path [0,1,3]
    it is the last node, so make copy of path
    results now [[0,1,3]]
    pop 3 off od path - now [0,1]
    done with call, return
  next edge - nope! loop ends
  pop from path, now it is [0]
  all done, return
loop to next edge, 2
  dfs call with 2, [0]
  push 2 on path, now [0,2]
  loop through edges, node 3
    dfs call with 2, [0,2]
    push 3 on path - [0,2,3]
    it is the last node, so copy path
    add to results, now [[0,1,3], [0,2,3]]
    pop 2 off of path, now [0,2]
    done - return
  loop to next edge - no more!
  pop off node 2 from path - [0]
  return
loop to next edge, none!
pop 0 from path - []
return

return the results of [[0,1,3], [0,2,3]]

*/
var allPathsSourceTarget = function(graph) {
  const results = [];

  const exploreEdges = function(index, path) {
    path.push(index);
    if (index === graph.length - 1) {
      let copy = [...path];
      results.push(copy);
    }
    const edgeList = graph[index];
    for (let i = 0; i < edgeList.length; i += 1) {
      const nextEdge = edgeList[i];
      exploreEdges(nextEdge, path);
    }
    path.pop();
    return;
  }

  exploreEdges(0, []);
  return results;
};

// testing
let graph;
let answer;
let expected;
let test;
let result;

graph = [[1,2],[3],[3],[]];
answer = [[0,1,3],[0,2,3]];
expected = JSON.stringify(answer);
test = '4 node graph with 2 paths'
result = JSON.stringify(allPathsSourceTarget(graph));
console.assert(expected === result, 'Expected "%s", but got "%s", from "%s"', expected, result, JSON.stringify(graph));

console.log('TESTING DONE');
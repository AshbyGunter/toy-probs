/*
          Course Schedule II problem from leetcode: leetcode.com

O: an array of integers representing a valid topological order through the given adjacencies
I: an integer representing the number of courses there are, and an array of tuples, representing prerequesites in the form [course, prerequesite] as a list of edges
C: none given
E:  there could be a cycle in the graph, making it impossible to get through all courses
Plan:
recursive DFS to establish a topological ordering of the graph

we start with an arbitrary node, for sake of ease, it will be 0
use dfs traversal
if we encounter a node on our traversal for a second time, there is a cycle and it will be impossible to complete all courses
solution is a track "status" / color of a node
unvisited initially
in progress after it has been visited once
done once all of it's neighbors have been investigated

build a list of neighbors
start at 0
mark it in progress
recursively investigate all of it's neighbors
- if a neighbor is Unvisited, recursively visit
- if a neighbor is in progress, a cycle exits and we're done
- if a neightbor is done, ignore it

once all neighbors are done, add the current node/number to the stack

once that traversal is done, go through other nodes/courses that haven't been traversed and perform the same for each
once all are done, return the stack in reverse order as the traversal
*/

var findOrder = function(numCourses, prerequisites) {
  // define each status using constants
  const UNVISITED = 1;
  const IN_PROGRESS = 2;
  const DONE = 3;
  // an array to store the neighbors for each course, all with empty arrays
  const neighbors = [];
  for (let i = 0; i < numCourses; i += 1) neighbors.push([]);
  // an array to store the status of each course, all start unvisited
  const statuses = new Array(numCourses).fill(UNVISITED);
  // an array to store the done nodes in order
  const ordered = [];

  function dfs(course) {
    statuses[course] = IN_PROGRESS;
    // loop through all neighbors
    for (let i = 0; i < neighbors[course].length; i += 1) {
      let neighbor = neighbors[course][i];
      if (statuses[neighbor] === UNVISITED) {
        if (!dfs(neighbor)) return false;
      }
      else if (statuses[neighbor] === IN_PROGRESS) return false;
    }
    statuses[course] = DONE;
    ordered.push(course);
    return true;
  }

  // go through the prerequesites and build the list of neighbors; a neighbor needs the current course as a prerequisite
  for (let i = 0; i < prerequisites.length; i += 1) {
    let [course, prereq] = prerequisites[i];
    neighbors[prereq].push(course);
  }

  for (let course = 0; course < numCourses; course += 1) {
    if (statuses[course] === UNVISITED) if (!dfs(course)) return [];
  }

  return ordered.reverse();
};

// tests
let num;
let list;
let result;
let expected;

num = 4;
list = [[1,0],[0,1],[2,0],[3,1],[3,2]];
expected = [];
result = findOrder(num, list);
console.assert(JSON.stringify(expected) === JSON.stringify(result), 'got "%s" and not "%s"', JSON.stringify(result), JSON.stringify(expected));
/*
                Prison Cells After N Days problem from leetcode: leetcode.com

There are 8 prison cells in a row, and each cell is either occupied or vacant.
Each day, whether the cell is occupied or vacant changes according to the following rules:
If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)
We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.
Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

Example 1:
Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]
Explanation:
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]


O: an array with 8 elements, each of which is a 0 or 1, based on transforming input array according to adjacency rules
I: the starting array and number of days N / transformations to make
C: none given
E: first and last elements will change to 0 and stay that way
Plan:
straightforward method is to loop up to N and apply rules each day
don't alter the current status, as it would change the status of neighbors prematurely
only store last array and next, no need to store previous

above works, but has time issues and times out on leet code
to optimize - generate new days until a cycle is identified
store each step in the cycle
compare each new step to the 1st step made, as the initial entry may have 1's in the first or lasr element
once we find a match, the cycle has been identified
the number of cycles stored is how long the cycle is...
so we can take N, subtract 1 for the first step, then divide by the cycle length and take the remainder
use that to send back the specific step identified

*/


const prisonAfterNDays = (cells, N) => {

  const getNextDay = (current) => {
    const result = [0];
    for (let j = 1; j <= 6; j += 1) {
      let day = current[j - 1] === current[j + 1] ? 1 : 0;
      result.push(day);
    }
    result.push(0);
    return result;
  }

  if (N === 0) return cells;

  let today;
  let startOfCycle;
  let isCycle =  false;
  const cycleSteps = [];

  // get first step and save it as the stop condition for finding a cycle
  today = getNextDay(cells);
  startOfCycle = today.join('');
  cycleSteps.push(today);

  // loop from 2 to N, store each step until a cycle is found
  for (let i = 2; i <= N; i += 1) {
    today = getNextDay(today);
    isCycle = today.join('') === startOfCycle;
    if (isCycle) break;
    cycleSteps.push(today);
  }

  if (!isCycle) return today;
  let cycleIndex = (N - 1) % cycleSteps.length;
  return cycleSteps[cycleIndex];
};

// testing
function assertEqual(expected, result, test) {
  if (JSON.stringify(expected) === JSON.stringify(result)) console.log `passed ${test}`
  else console.log(`FAILED ${test}: expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
}

let inputCells = [0,1,0,1,1,0,0,1];
let result = prisonAfterNDays(inputCells, 1);
let expect = [0, 1, 1, 0, 0, 0, 0, 0];
assertEqual(expect, result, 'rules to transaform should be correctly applied after 1 day');

inputCells = [0,1,0,1,1,0,0,1];
result = prisonAfterNDays(inputCells, 2);
expect = [0, 0, 0, 0, 1, 1, 1, 0]
assertEqual(expect, result, 'rules to transaform should be correctly applied after 2 days');

inputCells = [0,1,0,1,1,0,0,1];
result = prisonAfterNDays(inputCells, 7);
expect = [0, 0, 1, 1, 0, 0, 0, 0];
assertEqual(expect, result, 'rules to transaform should be correctly applied after 7 days');

inputCells = [0,1,0,1,1,0,0,1];
result = prisonAfterNDays(inputCells, 15);
expect = [0, 1, 1, 0, 0, 0, 0, 0];
assertEqual(expect, result, 'rules to transaform should be correctly applied after 15 days');

inputCells = [0,1,0,1,1,0,0,1];
result = prisonAfterNDays(inputCells, 16);
expect = [ 0, 0, 0, 0, 1, 1, 1, 0 ];
assertEqual(expect, result, 'rules to transaform should be correctly applied after 15 days');


/*
                Island Perimeter problem from leetcode: leetcode.com

O: an integer, the perimeter of the island
I: an matrix of 1s and 0s representing a single island
C: none given
E: grid could be empty, may have only one row or one column
Plan:
naively, we could iterate through entire grid
every time we hit a one
  - check each adjacent cell
  - for each 0, or edge, add 1 to perieter
  - small optimization: track the cell we just came from and don't have to do a check in that direction

*/

var islandPerimeter = function(grid) {
  // returns a perimeter count for given cell
  const countPerimiterForSpace = (row, col) => {
    let count = 0;
    if (row + 1 >= grid.length || grid[row + 1][col] === 0) count += 1;
    if (row - 1 < 0 || grid[row - 1][col] === 0) count += 1;
    if (col + 1 >= grid[0].length || grid[row][col + 1] === 0) count += 1;
    if (col - 1 < 0 || grid[row][col - 1] === 0) count += 1;
    return count;
  }

  let perimeter = 0;
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (grid[row][col] === 1) perimeter += countPerimiterForSpace(row, col);
    }
  }
  return perimeter;
};

// testing
function assertEqual(expected, result, test) {
  if (expected === result)console.log `passed ${test}`
  else console.log(`FAILED ${test}: expected ${expected}, but got ${result}`);
}

let matrix = [];
let expect = 0;
let perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should return 0 for empty grid');

matrix = [[]];
expect = 0;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should return 0 when there are no 0s or 1s');

matrix = [[0]];
expect = 0;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should return 0 for a single water space');

matrix = [[0,0],[0,0]];
expect = 0;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should return 0 for a grid with only water');

matrix = [[1]];
expect = 4;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should return 4 for a sinlge island space');

matrix = [[1,1],[1,1]];
expect = 8;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should return 8 for a 2x2 grid of only land');

matrix = [[1,0],[1,1]];
expect = 8;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should count perimiter correctly for a mixed 2x2 island');

matrix =  [[0,1,0,0],
          [1,1,1,0],
          [0,1,0,0],
          [1,1,0,0]];
expect = 16;
perimeter = islandPerimeter(matrix);
assertEqual(expect, perimeter, 'should count perimiter correctly for a mixed 4x4 island');

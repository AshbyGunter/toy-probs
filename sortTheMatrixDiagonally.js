/*
                  Sort the Matrix Diagonally problem from leetcode: leetcode.com

O: MxN matrix of integers, matching the given matrix, but sorted on diagonals from top left to bottom right ascending
I: an MxN matrix of integers
C: none given
E: could have just one row or one column, matric could be empty; 1 and negative numbers possible?
Plan:
could copy each diagonal into an array, sort each, then reconstruct the matrix
use a map, with some key to identify each doagonal
pretend the diagonals extend out beyond the borders of the matrix
each diagonal will start at the expanded index, which will go from -last column number through the last column
construct each diagonal into an array in the map
go through and sort those arrays
go through the matrix again, but taking the elements from the sorted arrays and putting them in the new places
finally return the matrix
*/

var diagonalSort = function(mat) {
  if (mat.length === 0) return mat;
  if (mat.length ===1 || mat[0].length === 1) return mat;


  const diags = new Map();
  const lastRow = mat.length - 1;
  const lastCol = mat[0].length - 1;

  // build the arrays making up the diagonals
  const buildDiags = () => {
    // loop from -lastCol through lastCol
    for (let col = -lastCol; col <= lastCol; col += 1) {
      // add an empty array to map for each col
      diags.set(col, []);
      // loop through the diagonal
      for (let row = 0; row <= lastRow; row += 1) {
        // if coords are in bounds - row = row, col = col + row
        if ((col + row >= 0) && (col + row <= lastCol)) {
          // push matrix entry at row, col into array
          diags.get(col).push(mat[row][col + row]);
        }
      }
    }
  }

  // go through the diagonal arrays and sort them in descending order
  const sortDiags = () => {
    diags.forEach(diag => diag.sort((a, b) => b - a));
  }

  // go through the rows and columns and put sorted values in the correct places based on popping from the correct diagonals
  const assignSorted = () => {
    for (let col = -lastCol; col <= lastCol; col += 1) {
      for (let row = 0; row <= lastRow; row += 1) {
        if ((col + row >= 0) && (col + row <= lastCol)) mat[row][col + row] = diags.get(col).pop();
      }
    }
  }

  buildDiags();
  sortDiags();
  assignSorted();

  return mat;
};

// testing
function assertEqual(expected, result, test) {
  if (JSON.stringify(expected) === JSON.stringify(result)) console.log `passed ${test}`
  else console.log(`FAILED ${test}: expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
}

let test = [];
let expect = [];
let result = diagonalSort(test);
assertEqual(expect, result, 'should return empty array when given empty array');

test = [[]];
expect = [[]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return empty array inside empty array when given empty array inside empty array');

test = [[1, 2, 3, 1]];
expect = [[1, 2, 3, 1]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return input when there is only one row');

test = [[1], [2], [3], [1]];
expect = [[1], [2], [3], [1]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return input when there is only one column');

test = [[1, 2], [1, 2]];
expect = [[1, 2], [1, 2]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return 2x2 matrix with already sorted diagonals');

test = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
expect = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return 3x3 matrix with already sorted diagonals');

test = [[2, 1], [1, 1]];
expect = [[1, 1], [1, 2]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return 2x2 matrix with correctly sorted diagonals');

test = [[3, 3, 1], [2, 1, 2], [1, 1, 2]];
expect = [[1, 2, 1], [1, 2, 3], [1, 2, 3]];
result = diagonalSort(test);
assertEqual(expect, result, 'should return 3x3 matrix with already sorted diagonals');

/*
            Surrounded Regions problem from leetcode: leetcode.com
surroundedRegions.js

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

O: a matrix filled with 'X' and 'O', copied from given matrix but all 'O' places not directly connected to an edge are swapped to by 'X's
I: a matrix filled with 'X' and 'O'
C: modify input board in place
E: matrix sizes may vary, number of rows and columns may be different, assuming every spot on the board has a valid 'X' or 'O'
Plan:
straightforward brute force method:
loop through matrix
if hit a 'O', run a trace
if it has a path to an edge leave it, otherwise flip it
this may involve going over the same 'O' spots multiple times for a large area of 'O's

alternately...
go around the edge
from every 'O', build a list of spaces attached that are safe from flipping
now run through the matrix and change 'O's to 'X's unless they're in the safe list

can instead of building a list, just change the safe 'O' spots to something different
small optimization - don't need to navigate from corners, since they are not adjacent to any internal spots

check corners
iterate through other edge spaces
if 'O', change it to 'D' for "don't flip"
recursively inspect adjacent spaces

once done,
go through every spot on the board
change 'D' to 'O', change everything else to 'X'

*/

var solve = function(board) {
  if (board.length < 2 || board[0].length < 2 ) return;

  const lastRow = board.length - 1;
  const lastCol = board[0].length - 1;

  const lockPath = function(row, col) {
    if (row < 0 || row > lastRow || col < 0 || col > lastCol) return;
    if (board[row][col] === 'D' || board[row][col] === 'X') return;
    board[row][col] = 'D';
    lockPath(row + 1, col);
    lockPath(row, col + 1);
    lockPath(row - 1, col);
    lockPath(row, col - 1);
  }

  if (board[0][0] === 'O') board[0][0] = 'D';
  if (board[lastRow][0] === 'O') board[lastRow][0] = 'D';
  if (board[0][lastCol] === 'O') board[0][lastCol] = 'D';
  if (board[lastRow][lastCol] === 'O') board[lastRow][lastCol] = 'D';

  for (let col = 1; col < lastCol; col += 1) {
    lockPath(0, col);
    lockPath(lastRow, col);
  }

  for (let row = 1; row < lastRow; row += 1) {
    lockPath(row, 0);
    lockPath(row, lastCol);
  }

  for (let row = 0; row <= lastRow; row += 1) {
    for (let col = 0; col <= lastCol; col += 1) {
      if (board[row][col] === 'D') board[row][col] = 'O'
      else board[row][col] = 'X';
    }
  }
};

/*
          Word Search problem from leetcode: leetcode.com

O: a boolean, if the given string can be constructed using horizontal/vertically adjascent letters from the given matrix
I: a string to search for, and a matrix of letters
C: number of rows and columns is from 1 through 200, string and board are only lower and upper case english,
    and string length is from 1 through 10^3, and each cell may only be used once
E: number of rows and cols may not match, one could be very large and the other very small
    may be more letters in string than in matrix,

Plan:
we're going to modify the input, but could just as easily copy it
reason being is to not copy the entire matrix/board a bunch of times

use a helper function that has access to the board
takes a string to search for, and start coordinates
if the first letter is not at coordinates, return false
if the letter is in the coordinates
  set the current spot to '.'
  recursively check for next letter in positions in bounds in all 4 directions - up, down, left, right - slice off 1st letter of string
  if any of them are true, return true
  reset the spot back to the letter it had been (1st letter in string)
else if all are false, return false

loop through all starting positions
call helper with the coordinates and the given string
if true, return true
after done looping, return false
*/

var exist = function(board, word) {
  // if word is longer than total letters in board, return false
  if (word.length > board.length * board[0].length) return false;

  const exploreBoard = (row, col, letters) => {
    // if row, col are out of bounds, return false
    if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) return false;
    if (board[row][col] !== letters[0]) return false;
    if (letters.length === 1) return true;

    // toggle the current found letter spot so it won't count again
    board[row][col] = '.';
    const restOFLetters = letters.slice(1);

    if (exploreBoard(row - 1, col, restOFLetters)) return true;
    if (exploreBoard(row + 1, col, restOFLetters)) return true;
    if (exploreBoard(row, col - 1, restOFLetters)) return true;
    if (exploreBoard(row, col + 1, restOFLetters)) return true;

    // set current back to 1st element of letters so it can be used later
    board[row][col] = letters[0];
    return false;
  }

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      if (exploreBoard(row, col, word)) return true;
    }
  }
  return false;
};


// testing
let matrix;
let string;
let expected;
let result;

// matrix = ;
// string = ;
// expected = ;
// result = exist(matrix, string);
// console.assert(result === expected, 'got %s from %s with ', result, expected);

matrix = [['a']];
string = 'a';
expected = true;
result = exist(matrix, string);
console.assert(result === expected, 'got %s from %s with 1 letter matrix & a match', result, expected);

matrix = [['a']];
string = 'A';
expected = false;
result = exist(matrix, string);
console.assert(result === expected, 'got %s from %s with 1 letter matrix & upper vs lower case', result, expected);

matrix = [['a']];
string = 'b';
expected = false;
result = exist(matrix, string);
console.assert(result === expected, 'got %s from %s with 1 leter matrix & no match', result, expected);

matrix = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
string = 'ABCCED';
expected = true;
result = exist(matrix, string);
console.assert(result === expected, 'got %s from %s with 3x4 matrix and a match', result, expected);

matrix = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
string = 'SEE';
expected = true;
result = exist(matrix, string);
console.assert(result === expected, 'got %s from %s with 3x4 matrix and a match', result, expected);

matrix = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
string = 'ABCB';
expected = false;
result = exist(matrix, string);
console.assert(result === expected, 'got %s from %s with 3x4 matrix and no match', result, expected);

console.log('Done Testing!');
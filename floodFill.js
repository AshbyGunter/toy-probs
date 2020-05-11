/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input:
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation:
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
*/

/*
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

/*
O: a 2-D array of integers, with the new color flooded from given start coordinate
I: a 2-D array of integers, a starting row and column, and a new color
C: length of overall array is 1 to 50, as are the subarrays, the start pixel will be in range of image,
    and the new color will be an integer from 0 to 65535
E: none given
Plan:
recursive!
don't mutate the input - required? maybe not
do indirect recursion
store a copy of the image
look at starting row and column
store the color there as the target color
use an internal helper function
it will take row and column -> new color, target color, and copy of image are all stored


bounds helper
gets coords, returns if they're in bounds

fill helper
if row and column are not target color, stop
set color to new color
if left in bounds, recurse to it
if top in bounds, recurse to it
if right in bounds, recurse to it
if bottom in bounds, recurse to it

run fill helper

*/

var floodFill = function(image, sr, sc, newColor) {
  let targetColor = image[sr][sc];
  const copy = [];
  for (let i = 0; i < image.length; i += 1) {
    let rowCopy = image[i].slice();
    copy.push(rowCopy);
  }

  const isInBounds = function(r, c) {
    if ((r >= 0) && (r < image.length) && (c >= 0) && (c < image[0].length)) {
      return true;
    }
    return false;
  }

  const fill = function(row, col) {
    // if color at row & col is NOT target color,
    if (copy[row][col] !== targetColor) {
      return;
    }
    copy[row][col] = newColor;
    if (isInBounds(row, col - 1)) {
      fill(row, col - 1);
    }
    if (isInBounds(row - 1, col)) {
      fill(row - 1, col);
    }
    if (isInBounds(row, col + 1)) {
      fill(row, col + 1);
    }
    if (isInBounds(row + 1, col)) {
      fill(row + 1, col);
    }
  }

  fill(sr, sc);
  return copy;
};


// testing
var test1 = [[1]];
result1 = floodFill(test1, 0, 0, 2);
console.log(result1); // [[2]]

var test2 = [[1, 1], [1, 1]];
result2 = floodFill(test2, 1, 1, 2);
console.log(result2);  // [[2, 2], [2, 2]]

var test3 = [[1,1,1],[1,1,0],[1,0,1]];
result3 = floodFill(test3, 1, 1, 2);
console.log(result3);  // [[2,2,2],[2,2,0],[2,0,1]]

// var test4 = ;
// result4 = floodFill(test4);
// console.log(result4);

// var test5 = ;
// result5 = floodFill(test5);
// console.log(result5);

// var test6 = ;
// result6 = floodFill(test6);
// console.log(result6);

// var test7 = ;
// result7 = floodFill(test7);
// console.log(result7);

// var test8 = ;
// result8 = floodFill(test8);
// console.log(result8);

// var test9 = ;
// result9 = floodFill(test9);
// console.log(result9);

/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
/*

/*
O: a boolean, indicating if given points are all on a straight line
I: an array of coodinates on an x-y grid
C: from 2 to 1000 coordinates provided in array, value of x is from -10^4 to 10^4,
    there are no duplicate coordinates
E: could be just two points

Plan:
if there are only 2 coordinates, by definition it is a straight line
find the slope defined by the first two coordinates
loop through all the rest of the coordinates
find slope between 2nd coordinate and each other
if the slope ever does not match the original slope found, return false
if all match, return true
*/

var checkStraightLine = function(coordinates) {
  var targetSlope;

  const findSlope = function (pointOne, pointTwo) {
    const rise = pointTwo[1] - pointOne[1];
    const run = pointTwo[0] - pointOne[0];
    return rise / run;
  }

  if (coordinates.length === 2) {
    return true
  }

  targetSlope = findSlope(coordinates[0], coordinates[1])
  // loop from 2 to coordinates.length
  for (var i = 2; i < coordinates.length; i += 1) {
    if (findSlope(coordinates[1], coordinates[i]) !== targetSlope) {
      return false;
    }
  }

  return true;
};

// testing
var test1 = [[0, 0], [0, 1]];
result1 = checkStraightLine(test1);
console.log(result1);  // true

var test2 = [[0, 0], [1, 1], [2, 2]];
result2 = checkStraightLine(test2);
console.log(result2);  // true

var test3 = [[0, 0], [1, 1], [2, 3]];
result3 = checkStraightLine(test3);
console.log(result3);  // false

var test4 = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
result4 = checkStraightLine(test4);
console.log(result4);  // true

var test5 = [[0, -1], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
result5 = checkStraightLine(test5);
console.log(result5);  // false

var test6 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
result6 = checkStraightLine(test6);
console.log(result6);  // true

var test7 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
result7 = checkStraightLine(test7);
console.log(result7);  // false

// var test8 = ;
// result8 = checkStraightLine(test8);
// console.log(result8);  //

// var test9 = ;
// result9 = checkStraightLine(test9);
// console.log(result9);  //



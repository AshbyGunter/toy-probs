/*
        Max Consecutive Ones III problem from leetcode: leetcode.com

Given an array A of 0s and 1s, we may change up to K values from 0 to 1.
Return the length of the longest (contiguous) subarray that contains only 1s.

Example 1:
Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation:
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

Example 2:
Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation:
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

Note:
1 <= A.length <= 20000
0 <= K <= A.length
A[i] is 0 or 1

O: an integer, the length of the longest subarray possible with given array and changing given K zeros to ones
I: an array of 0s and 1s, and an integer K, the number of 0s that can be changed to 1s
C: above
E: array could be only 1 element, could be all 0s or all 1s
Plan:
use a sliding window
iterate through the array
go through 0s up to given K, then through anyt following 1's until the next element is the K+1 0
store that length as the max
move up the start of the window to just past the first 0 in the window
go back to advancing the front edge of the window like previous
whenever the length increases, store that as the new max
repeat until the end of the array is reached

*/

var longestOnes = function(A, K) {
  let maxLengthSoFar = 0;
  let zerosInWindow = 0;
  let leadingEdge = 0;
  let rearEdge = 0;

  for (; leadingEdge < A.length; leadingEdge += 1) {
    if (A[leadingEdge] === 1) {
      maxLengthSoFar = Math.max(leadingEdge - rearEdge + 1, maxLengthSoFar);
    } else {  // if the next element is a 0
      zerosInWindow += 1;
      if (zerosInWindow <= K) {
        maxLengthSoFar = Math.max(leadingEdge - rearEdge + 1, maxLengthSoFar);
      } else {   // if zerosInWindow > K
        while (zerosInWindow > K) {
          if (A[rearEdge] === 0) zerosInWindow -= 1;
          rearEdge += 1;
        }
      }
    }
  }

  return maxLengthSoFar;
};

// testing
let testOne = [];
let resultOne = longestOnes(testOne, 0);
console.log(resultOne, 'expected 0');

let testTwo = [];
let resultTwo = longestOnes(testTwo, 1);
console.log(resultTwo, 'expected 0');

let testThree = [];
let resultThree = longestOnes(testThree, 2);
console.log(resultThree, 'expected 0');

let testFour = [0];
let resultFour = longestOnes(testFour, 0);
console.log(resultFour, 'expected 0');

let testFive = [0];
let resultFive = longestOnes(testFive, 1);
console.log(resultFive, 'expected 1');

let testSix = [0];
let resultSix = longestOnes(testSix, 2);
console.log(resultSix, 'expected 1');

let testSeven = [1];
let resultSeven = longestOnes(testSeven, 0);
console.log(resultSeven, 'expected 1');

let testEight = [1];
let resultEight = longestOnes(testEight, 1);
console.log(resultEight, 'expected 1');

let testNine = [1];
let resultNine = longestOnes(testNine, 2);
console.log(resultNine, 'expected 1');

let testTen = [0,0];
let resultTen = longestOnes(testTen, 0);
console.log(resultTen, 'expected 0');

let testEleven = [0,0];
let resultEleven = longestOnes(testEleven, 1);
console.log(resultEleven, 'expected 1');

let testTwelve = [0,0];
let resultTwelve = longestOnes(testTwelve, 2);
console.log(resultTwelve, 'expected 2');

let testThirteen = [0,0];
let resultThirteen = longestOnes(testThirteen, 3);
console.log(resultThirteen, 'expected 2');

let testFourteen = [1,1];
let resultFourteen = longestOnes(testFourteen, 0);
console.log(resultFourteen, 'expected 2');

let testFifteen = [1,1];
let resultFifteen = longestOnes(testFifteen, 1);
console.log(resultFifteen, 'expected 2');

let testSixteen = [1,1,1,0,0,0,1,1,1,1,0];
let resultSixteen = longestOnes(testSixteen, 2);
console.log(resultSixteen, 'expected 6');

let testSeventeen = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
let resultSeventeen = longestOnes(testSeventeen, 3);
console.log(resultSeventeen, 'expected 10');

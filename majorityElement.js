/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

@param {number[]} nums
@return {number}

*/

/*
O: a number, which exists in over half of the positions in the given array
I: an array of numbers that contains a majority number
C: none given
E: empty array, all elements are the majority, majority number exits the minimum number of times,
    or > length of array /2
Plan: make a count of each number, store in an object
  once the count of any number is longer than length of the array - done!
*/


var majorityElement = function(nums) {
  // counts
  // length of array

  // loop through array
    // if there is a count for current
      // increment by 1
      // if greater than n/2, return that number
    // else
      // give it a count of 1
};

// testing
var test1 = [1];
result1 = majorityElement(test1);
console.log(result1); // 1

var test2 = [2, 2, 3];
result2 = majorityElement(test2);
console.log(result2);  //

var test3 = [4, 5, 5];
result3 = majorityElement(test3);
console.log(result3);  // 5

var test4 = [6, 7, 6, 6];
result4 = majorityElement(test4);
console.log(result4);  // 6

var test5 = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
result5 = majorityElement(test5);
console.log(result5);  // 8

var test6 = [10, 9, 11, 9, 12, 9, 13, 9, 14, 9, 9];
result6 = majorityElement(test6);
console.log(result6);  // 9

var test7 = [3,2,3];
result7 = majorityElement(test7);
console.log(result7);  // 3

var test8 = [2,2,1,1,1,2,2];
result8 = majorityElement(test8);
console.log(result8);  // 2

// var test9 = ;
// result9 = majorityElement(test9);
// console.log(result9);

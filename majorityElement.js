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

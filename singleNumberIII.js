/*
          Single Number III problem from leetcode: leetcode.com

O: an array, containing the two numbers that appear in the given array only once each
I: an array of numbers, all of which appear twice except for two of them which each appear once
C: time complexity: O(N), no space constraints
E: array will always contain at least the two single elements, may have nothing else,
    input array could be very long
Plan:
go through the input array
put each number into a set
if the number already exists in the set, delete it from the set
at end, should only be two elements left
put them into an array to return

*/

var singleNumber = function(nums) {
  const singlesFound = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    // if current is not in set -> add it
    if (!singlesFound.has(nums[i])) singlesFound.add(nums[i])
    // else current is in set -> delete it
    else singlesFound.delete(nums[i]);
  }

  // convert the set to an array
  // return the array
  return [...singlesFound];
};

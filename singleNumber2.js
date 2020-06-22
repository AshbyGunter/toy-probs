/*
            Single Number II problem from leetcode: leetcode.com
singleNumber2.js

Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
-- there are bitwise solutions for this that I do not feel up to spending the time to try right now

Example 1:
Input: [2,2,3,2]
Output: 3

Example 2:
Input: [0,1,0,1,0,1,99]
Output: 99

O: an integer, the singleton from the input array
I: an array of integers
C: O(N) time, and if possible O(1) space
E: array is not empty; assuming only positive integers in the array
Plan:
loop through the array
add current to a running total for the array
if current is not in a set
- add it to the set
- and add it to a running set total

multiple the set total by 3
subtract the array total
divide by 2
return result

*/

var singleNumber = function(nums) {
  let numsTotal = 0;
  let setTotal = 0;
  const eachNum = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    numsTotal += nums[i];
    if (!eachNum.has(nums[i])) {
      eachNum.add(nums[i]);
      setTotal += nums[i];
    }
  }

  return (setTotal * 3 - numsTotal) / 2;
};

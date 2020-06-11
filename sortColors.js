/*
         Sort Colors problem from leetcode: leetcode.com
sortColors.js

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

O: an array sorted by "color", with each color grouped together and in a specific order
I: an array of integers, 0, 1, and 2
C: try to work on constant O(1) space and O(N) time
E: given array could be empty, or contain fewer than all 3 colors
Plan:
point to first or last position of each color to track where they are / where to move things?

we could loop through and use something like an insetion sort
this could cause a lot of swapping, but it would be done in one pass and without a lot of extra space

potential optimization: track 0 beginning at starts, and track 2 from the end
whenever we hit a 0, use insertion sort-type swapping to put it in the right place
when we come across a 2, we do the same but coming in from the end of the array
and loop until the checking pointer hits the 2 pointer
so we would have a traversal pointer, a end of 0 pointer and a start of 2 pointer

this could be optimized with some further logic that would prevent swapping items in the same place and moving both pointers past where their sorting elements are supposed to be

*/

var sortColors = function(nums) {
  if ((nums.length === 0) || (nums.length === 1)) return nums;

  let traversal = 0;
  let nextZero = 0;
  let nextTwo = nums.length - 1;

  while (traversal <= nextTwo) {
    if (nums[traversal] === 0) {
      let temp = nums[traversal];
      nums[traversal] = nums[nextZero];
      nums[nextZero] = temp;
      nextZero += 1;
      traversal += 1;
    } else if (nums[traversal] === 2) {
      let temp = nums[traversal];
      nums[traversal] = nums[nextTwo];
      nums[nextTwo] = temp;
      nextTwo -= 1;
    } else {
      traversal += 1;
    }
  }
  return nums;
};
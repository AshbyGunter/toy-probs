/*
              Search Insert Position problem from leetcode: leetcode.com
searchInsertPosition.js

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

O: an integer, the index where the target number is in the given array, or the index where it should be inserted
I: a sorted array of unique numbers and a target number
C: none given
E: array could be empty, target could need to be inserted at beginning or very end of array
Plan:
do a binary search of the array
need to find the target OR the place that the target would be inserted
finding target is equality
finding where the target should go means the lower value is to the left and the larger value is to the right,
      so the index to return is the one containing the 1st number larger than the target
start with pointers to the start and end of the list of numbers
find the mid point between those (round down)
check that mid for target
if equal - return that index
if target lower, put end at mid
if targer higher, put start at mid + 1
repeat - find the mid point, etc
if not, we stop once start points to the same element as end
and if target does not match element there
if target less than element there, index would be right there
if target larger, index will be one higher

*/

var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  if (nums.length === 0) return 0;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return mid
    else if (target > nums[mid]) start = mid + 1
    else end = mid;
  }

  if (target <= nums[start]) return start
  return start + 1;
};

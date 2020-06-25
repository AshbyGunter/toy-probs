/*
            Find the Duplicate Number problem from leetcode: leetcode.com
findTheDuplicateNumber.js

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:
Input: [1,3,4,2,2]
Output: 2

Example 2:
Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

O: an integer from 1 to n (length of the given array) that is duplicated in the array
I: an array of integers from 1 through n, where n + 1 is the length of array and only one element is duplicated
C: O(1) constant space and less than O(n^2) time
E: by definition, input array will have at least two elements, a number in the array can be repeated more than once, but only one number is repeated
Plan:
Brute force nested loop or recursion is disallowed in time constraint
Sorting would mutate the array, and copying then sorting would violate space constraint
Constructing a set while interating and checking each new elements violates space constraint
Using a cycle detection by treating each element as the "next" index...
---problem - an element that has itself as an index:
  1, 1, 2 ---> the only element leading to nums[2] is at nums[2], and following nums[1] will always lead to itself, making an infinite loop

Only reasonable solution I've found is a binary search that counts all elements in nums that fall in a range
it necessitates going through all of nums log(n) times to home in on the range that has too many occurances

so use a binary search on overall range of 1 through n
use low & high as boundaries
divide in half and search low to mid
inside we loop through nums and count how many elements are in that range
if elements in range is less than or equal to the range, adjust low to mid + 1
if there are more elements than the range itself, adjust high to mid
repeat binary search until it's just one number
return that
*/

var findDuplicate = function(nums) {
  let low = 1;
  let high = nums.length - 1;
  let mid;
  let countInCurrentRange;
  let expectedInCurrentRange;

  while (low < high) {
    mid = Math.floor((low + high) / 2);
    expectedInCurrentRange = mid - low + 1;
    countInCurrentRange = 0;
    // loop through nums
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] >= low && nums[i] <= mid) countInCurrentRange += 1;
    }
    if (countInCurrentRange <= expectedInCurrentRange) low = mid + 1
    else high = mid;
  }

  return low;
};
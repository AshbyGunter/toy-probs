/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.



Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10


Note: Your solution should run in O(log n) time and O(1) space.
*/

/*
O: an integer, the only element that appears a single time in the given array
I: a sorted array of integers, each element but one appearing twice
C: time complexity: O(log n), space complexity O(1)
E: if array length is one, return that element
    if array length is three, it the 1st or last, whick doesn't match the middle
Plan:
length of array will always be odd, because there are two of each number in the array, plus the single one
check the element in the exact center of the array
length / 2, round down

in example 1, length is 9, so halfway is index 4
it is a 3
now if everything to the left has a pair, then the matching 3 should be to the right,
but that is a 4, which means the singleton is the 3 or to the left of the 3
so check first the right side element - which is a 3
now we can search from the beginning of the array up through the mid index -2
--because we can rule out the mid index and the one directly to the side
this will yield an odd numbered length again, so recurse the search on that subarray
[1,1,2]
the length is only 3
the one that doesn't match the middle is the answer, and that is the 2


another ex
[1,1,2,2,3,3,4,4,8]
9/2 = 4.5, round down 4
curr = 3, to the right is 3, so search 1 past that to the end
[4,4,8]
left is 4,, and a match, return 8

so steps:
use indirect recursion to search start to end
get length - if it's 1, return that element
if length is 3, check left and right and return the one that doesn't match the middle
get middle index by taking end - start / 2, round down and add to start
if that element matches the one to the right, then the search proceeds to the right
--set start to middle + 2 and recursively call
otherwise search proceeds to the left
--set end to middle - 2 and recursively call

correction - once the middle is decided, the way to check further is dependant on if the number of
elements to each side is even or odd!!

*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var search = function(start, end) {
    let middle = Math.floor((end - start) / 2) + start;
    // if only one element, it is the answer
    if (start === end) {
      return nums[start];
    }
    // if 3 elements, return the one that does not match the middle
    if (end - start + 1 === 3) {
      if (nums[start] === nums[start + 1]) {
        return nums[end];
      }
      return nums[start];
    }

    // if middle is even, singleton could be middle and match on right if sorted until mid
    if (middle % 2 === 0) {
      // if mid does not match left or right
      if ((nums[middle] !== nums[middle - 1]) && (nums[middle] !== nums[middle + 1])) {
        return nums[middle];
      }
      // if mid matches right
      if (nums[middle] === nums[middle + 1]) {
        return search(middle + 2, end);
      }
      // search left side
      return search(start, middle - 2);
    }

    // otherwise if middle is odd, singleton can not be middle and match on left if sorted until mid
    // if mid matches left
    if (nums[middle] === nums[middle - 1]) {
      // search on right side
      return search(middle + 1, end);
    }
    // search on left side
    return search(start, middle - 1);
  }

  return search(0, nums.length - 1);
};

// testing
var test1 = [1];
result1 = singleNonDuplicate(test1);
console.log(result1);  // 1

var test2 = [1,1,2];
result2 = singleNonDuplicate(test2);
console.log(result2);  // 2

var test3 = [3,4,4];
result3 = singleNonDuplicate(test3);
console.log(result3);  // 3

var test4 = [1,1,2,2,4];
result4 = singleNonDuplicate(test4);
console.log(result4);  // 4

var test5 = [1,1,4,4,5,8,8];
result5 = singleNonDuplicate(test5);
console.log(result5);  // 5

var test6 = [1,1,2,3,3,4,4,8,8];
result6 = singleNonDuplicate(test6);
console.log(result6);  // 2

var test7 = [3,3,7,7,10,11,11];
result7 = singleNonDuplicate(test7);
console.log(result7);  // 10

var test8 = [1,1,2,3,3];
result8 = singleNonDuplicate(test8);
console.log(result8);  // 2

/*
[1] --> end case!
[1, 1 ,2] --> end case!
[1,1, 2 ,3,3]  --> len 5, mid 2, can be middle, match would be to right
[1,1,2, 2 ,3,4,4] --> len 7, mid 3, cannot be middle, match would be to left
[1,1,2,2, 3 ,4,4,5,5] --> len 9, mid 4, can be middle, match would be to right
[1,1,2,2,3, 3 ,4,5,5,6,6] --> len 11, mid 5, cannot be middle, match would be to left
[1,2,2,3,3,4, 4 ,5,5,6,6,7,7] --> len 13, mid 6, can be middle, match would be to right
[1,1,2,2,3,3,4, 4 ,5,5,6,6,7,7,8] --> 15, cannot be middle, match to left
*/
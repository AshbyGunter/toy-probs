/*
          Contiguous Array problem from leetcode: leetcode.com
contiguousArray.js

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.

@param {number[]} nums
@return {number}

O: an integer, the length of the largest contiguous subarray in the given array with an equal number of 0s and 1s
I: a binary array with up 50k elements
C: none given, should be solvable in O(n)
E: input is a valid array of 1's and 0's, could be an empty array
[0,0,0] would be 0, as there are no 1s
[1,1,1] would also be 0
[0,0,1,1] would ve 4 since there is an equal number of 0s and 1s, but encompasses the entire array
[0,0,0,1,1] would be 4
[1,0,1,0,1] would be 4

Plan:
we don't know how many 0s or 1s will be found clustered together, so we can't disregard any particular index or running sum, which means there is no easy way to go through the array and track a sum of particular segments
if we look at a running summ of everything up to that point in each place however, that will let us know what the total was up until them, then we can look the the totals that are the farthest apart

input   [0, 0, 0]
totals  [0, 0, 0]

input   [1, 1, 1]
totals  [1, 2, 3]

input   [0, 0, 1, 1]
totals  [0, 0, 1, 2]
--- okay, can't just track a running total as such, need to know the ratio of 0s to 1s, so let's subtract 1 for a 0

input   [0,   0,  0]
totals  [-1, -2, -3]   --> no matching totals

input   [1, 1, 1]
totals  [1, 2, 3]   --> no matching totals

input   [0, 0, 1, 1]
totals  [-1, -2, -1, 0]  --> matching at 2nd -2, which would be length of 2, for index 2 - index 0 = 2
              and at 2nd 1, which is a length of 4...  so for a 0 we need to add 1 more since it goes to the beginning

input   [0,   0,  0,  1,  1]
totals  [-1, -2, -3, -2, -1]  --> matching at the -2 total for a length of index 3 - index 1 = 2
            also matching at -1 total for a length of index 4 - index 0 = 4

input   [1, 0, 1, 0, 1]
totals  [1, 0, 1, 0, 1] --> matching at 1 total for length of index 2 - index 0 = 2
          matching again at 0 totel for length of index 3 - index 1 = 2
          matching again at 1 total, but matches at both index 0 and index 2; we want the longest, so we can ignore the later occurrences of the same total, so length would be index 4 - index 0 = 4

so we need to store the index of the 1st occurrance of each total
an array would word, but would be slower as we don't know where the total could end up;
it could be 49,997 to 49,997 with a length of 2 or -49,997 to -49,997,
so constantly searching from the beginning of that array will be slow
so let's use an object!

so start with an empty object, a maxLength of 0 and a runingTotal of 0
add 1 to to runningTotal for a 1, or subtract 1 for a 0
if the running total is 0, update max to be length to current element
if the runningTotal does not currently have an entry in the object, store the current index for the total
if the runningTotal does exist in object, get that first element and check length;
  -- if it's larger than max, update max
return max at the end
*/

var findMaxLength = function(nums) {
  let firstIndexOfTotals = {};
  let runningTotal = 0;
  let maxLength = 0;

  // loop through nums
    // if current is 1
      // add 1 to runningTotal
    // else
      // subtract 1 from runningTotal

    // if runingTotal is 0
      // update max to length of nums up to current
    // else if runningTotal is defined in object
      // update max to be larger of current max of current index - index of 1st occurrance of runningTotal
    // else // runningTotal hasn't occurred yet
      // add runningTotal: current index to object

  // return maxLength
};

// testing
var test1 = [0];
result1 = findMaxLength(test1);
console.log(result1, 'should be 0');

var test2 = [1];
result2 = findMaxLength(test2);
console.log(result2, 'should be 0');

var test3 = ;
result3 = findMaxLength(test3);
console.log(result3, 'should be ');

var test4 = [0, 0];
result4 = findMaxLength(test4);
console.log(result4, 'should be ');

var test5 = [1, 1, 1];
result5 = findMaxLength(test5);
console.log(result5, 'should be ');

var test6 = [0, 1];
result6 = findMaxLength(test6);
console.log(result6, 'should be ');

var test7 = [1, 0];
result7 = findMaxLength(test7);
console.log(result7, 'should be ');

var test8 = [0, 0, 1, 1];
result8 = findMaxLength(test8);
console.log(result8, 'should be 4');

var test10 = [0, 0, 0, 1, 1];
result10 = findMaxLength(test10);
console.log(result10, 'should be 4');

var test11 = [1, 0, 1, 0, 1];
result11 = findMaxLength(test11);
console.log(result11, 'should be 4');

var test12 = [0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1];
result12 = findMaxLength(test12);
console.log(result12, 'should be 10');
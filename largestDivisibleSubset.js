/*
          Largest Divisible Subset problem from leetcode: leetcode.com
largestDivisibleSubset.js

Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:
Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)

Example 2:
Input: [1,2,4,8]
Output: [1,2,4,8]

/*

/*
O: an array, a subset of given array where any given number will have a no-remainder division in either direction with every other number in the set
I: a set of positive integers
C: none given
E: given set could be empty, could be very large, could have only extremely large numbers in it
    if there is a 1, it belongs in every possible solution, set may not be in order
Plan:
an efficient solution seems like it would need to be made up of numbers that all result from a base raised to a power, but 3, 6, 12 would work and not fit that mold
should be solvable with recusion, but that gets expensive

problem breaks down to multiple pieces:
1) sort the list O(n log n), so we always know the previous elements are less than the current
2) build an array that tracks the max size of a subset that includes any given element, and seperately track max size
  - prefill with 0s
  - at each element, go backwards through all previous elements
    - if it is divisible, increment that prev element's count by 1 (if it's higher)
      (based on transitive property, if prev % it's past = 0, then current % prev = 0 means current % prev's others = 0)
    - set new max if this is higher than current max
3) go backwards through the built array
  - find the element that matches max and put it into the results array, and track it
  - reduce max by 1
  - find next element that matches max
    - if its divisible by the previous found element, add it to results, make this the new previous and keep going
  - keep going until max is -1

*/

var largestDivisibleSubset = function(nums) {
  const results = [];
  const sizes = new Array(nums.length).fill(0);
  let maxSubsetSize = 0;

  nums.sort((a, b) => a - b);

  // dynamic programming step - track max and build array of max subset size
  // loop through nums
  // start with 2nd element, since there is nothing to divide the 1st element with
  for (let outer = 1; outer < nums.length; outer += 1) {
    for (let inner = outer - 1; inner >= 0; inner -= 1) {
      if (nums[outer] % nums[inner] === 0) {
        let subsetSize = sizes[inner] + 1;
        if (subsetSize > sizes[outer]) {
          sizes[outer] = subsetSize;
          if (subsetSize > maxSubsetSize) maxSubsetSize = subsetSize;
        }
      }
    }
  }

  // build results array step
  let prev;
  let index = sizes.length - 1;
  while ((maxSubsetSize > -1) && (index >= 0)) {
    if (sizes[index] === maxSubsetSize) {
      if ((prev === undefined) || (prev % nums[index] === 0)) {
        results.push(nums[index]);
        prev = nums[index];
        maxSubsetSize -= 1;
      }
    }
    index -= 1;
  }

  return results;
};

// testing
var nums1 = [2, 3, 6, 12, 24, 25, 27, 31];
var result1 = largestDivisibleSubset(nums1);
console.log(result1);
/*
maximumSumCircularSubarray
Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)



Example 1:
Input:
[1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3


Example 2:
Input:
[5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10
Example 3:

Input:
[3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

Example 4:

Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3
Example 5:

Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1


Note:

-30000 <= A[i] <= 30000
1 <= A.length <= 30000
*/


/*
 * @param {number[]} A
 * @return {number}
 */

/*
O: an integer, the largest possible sum from a run of elements in the circular array
I: an array of integers, considering the end to loop back to the beginning
C: can only include each element once in the sum,
    all elements are from -30,000 to 30,000, incluside
    the length of input array is from 1 to 30,000 inclusive
E: A will be a valid, non-empty array of integers
Plan:
so Kandane's algorithm can help find the max subarray in a linear array
then the minimum subarray can be found by inverting the numbers and using the same algorithm
subtract the minimum subarray from the overall total of the whole array will yield the largest
  subarry that goes across the divide
compare the two and return the largest

*/
var maxSubarraySumCircular = function(A) {
  let result;
  let total = 0;

  let posMax = -Infinity;
  let posCurr = 0;

  let negMax = -Infinity;
  let negCurr = 0;

  for (let i = 0; i < A.length; i += 1) {
    total = total + A[i];

    posCurr = Math.max(posCurr + A[i], A[i]);
    posMax = Math.max(posCurr, posMax);

    negCurr = Math.max(negCurr - A[i], -A[i]);
    negMax = Math.max(negCurr, negMax);
  }

  result = Math.max(posMax, total + negMax);
  if (result === 0) {
    return posMax;
  }
  return result;
};

// testing
var test1 = [1,-2,3,-2];
result1 = maxSubarraySumCircular(test1);
console.log(result1);  // 3

var test2 = [5,-3,5];
result2 = maxSubarraySumCircular(test2);
console.log(result2);  // 10

var test3 = [3,-1,2,-1];
result3 = maxSubarraySumCircular(test3);
console.log(result3);  // 4

var test4 = [3,-2,2,-3];
result4 = maxSubarraySumCircular(test4);
console.log(result4);  // 3

var test5 = [-2,-3,-1];
result5 = maxSubarraySumCircular(test5);
console.log(result5);  // -1

// var test6 = ;
// result6 = maxSubarraySumCircular(test6);
// console.log(result6);

// var test7 = ;
// result7 = maxSubarraySumCircular(test7);
// console.log(result7);

// var test8 = ;
// result8 = maxSubarraySumCircular(test8);
// console.log(result8);

// var test9 = ;
// result9 = maxSubarraySumCircular(test9);
// console.log(result9);
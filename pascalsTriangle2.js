/*
          Pascal's Triangle II problem from leetcode: leetcode.com
pascalsTriangle2.js

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?

looking 1st for recusive solution
O: an array of integers, the items in the given row of a Pascal's Triangle
I: a non-negative integer k, indicating the row to return from 0 to 33
C: none given, but asks if space complexity can be limited to O(k) - probably not recursively, though
E: k could be 0
Plan:
base cases: row 0 is [1], row 1 is [1, 1]
recusively get solution for k - 1
construct a results array
push in a 1
loop through the solution array for k - 1 in overlapping pairs
add the pair together and put that number into result array
once done looping, add in another 1
return the result
*/

var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const results = [1];
  const prevRow = getRow(rowIndex - 1);
  for (let i = 1; i < prevRow.length; i += 1) {
    let sumAbove = prevRow[i] + prevRow[i - 1];
    results.push(sumAbove);
  }
  results.push(1);
  return results;
};
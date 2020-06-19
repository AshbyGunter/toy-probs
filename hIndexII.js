/*
              H-Index II problem from leetcode: leetcode.com
hIndexII.js

Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Example:
Input: citations = [0,1,3,5,6]
Output: 3
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had
             received 0, 1, 3, 5, 6 citations respectively.
             Since the researcher has 3 papers with at least 3 citations each and the remaining
             two with no more than 3 citations each, her h-index is 3.
Note:

If there are several possible values for h, the maximum one is taken as the h-index.

Follow up:

This is a follow up problem to H-Index, where citations is now guaranteed to be sorted in ascending order.
Could you solve it in logarithmic time complexity?

O: an integer, the H-Index - there are at least H papers with H number of citations in given list
I: a sorted array of non-negative integers
C: O(log n) time, can do this in O(1) space
E: list could be empty, could have all the same number
Plan:
use a binary search of sorts, and track a max
go to mid
if that number is equal to the number of papers from there until the end of the list, return that number - done!
if that number is less than the number of papers from there until the end of the list, set max to the number
then set start to mid + 1 and search the right part of the list
otherwise that number is greater than number of papers to end of list, set max to number of papers to end of list
then set end to the mid - 1 and search the left part of the list
keep going until the bounds meet or cross

*/

var hIndex = function(citations) {
  if (citations.length === 0) return 0;
  if (citations.length === 1 && citations[0] >= 1) return 1;

  const numPapers = citations.length;
  let start = 0;
  let end = citations.length - 1;
  let mid;
  let maxH = 0;
  let papersLeft;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    papersLeft = numPapers - mid + 1
    if (citations[mid] === papersLeft) return papersLeft;
    if (citations[mid] < papersLeft) {
      maxH = Math.max(citations[mid], maxH);
      start = mid + 1;
    } else {
      maxH = Math.max(papersLeft, maxH);
      end = mid - 1;
    }
  }
  return maxH;
};
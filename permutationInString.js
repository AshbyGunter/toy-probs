/*
        Permutation in String problem from leetcode: leetcode.com
permutationInString
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False

Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

/*
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*
O: a boolean, true if a permutation of s1 exists in s2
I: two strings of length 1 to 10,000 made up of lowercase letters
C: none given
E: s1 longer than s2, same length for both s1 and s2 - both true and false
Plan:
sliding window dynamic approach, and short-circuit out as soon as we match
store counts for the letters in s1
and track total left to match
start at the beginning of s2, mark the start
go through s2
if the total left is more than the letters left in s2, break out of loop and return false
if current letter is not in s1, skip to next letter, but move the start there
if the current letter is in s1
if the count is 0, move up the start and add each letter back into the count
    & increment the total left count for each
decrement the count of that letter and total left
if total left is 0, all done! return

return false if we get all the way through the loop

*/

var checkInclusion = function(s1, s2) {
  // let start = 0
  // let totalLeft;
  // let s1Count = {};

  // const resetCount = function() {
    // totalLeft = s1.length;
    // loop through s1
      // add count of each letter to s1Count
  // }

  // resetCount();
  // loop through s2
    // if start + totalLeft > s2.length
      // break
    // if current letter is not in s1
      // start = i + 1;
      // continue
    // if the count of the current letter is 0
      // loop until the count of current letter is 1
        // increment count for letter at start by 1
        // increment totalLeft by 1
    // decrement count of current letter
    // decrement count of totalLeft
    // if totalLeft is 0
      // return true

  // return false;
};
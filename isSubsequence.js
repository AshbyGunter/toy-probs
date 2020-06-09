/*
         Is Subsequence problem from leetcode: leetcode.com
lsSubsequence.js

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
0 <= s.length <= 100
0 <= t.length <= 10^4
Both strings consists only of lowercase characters.

O: a boolean, indicating if the given string s is a subsequence of given string t
I: two strings of lowercase letters, s and t
C: none given
E: either string can be empty, s could be longer than t
Plan:
track progress in each string
loop through string t
compare current in t with current in s
if find a match for letter in s, increment that index
if we reach the full length of s, return true
if we get through all of t without making the match, return false

*/

var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  if (s.length > t.length) return false;

  let sIndex = 0;

  for (let tIndex = 0; tIndex < t.length; tIndex += 1) {
    if (s[sIndex] === t[tIndex]) sIndex += 1;
    if (sIndex === s.length) return true;
  }

  return false;
};

/*
    Find All Anagrams in a String from leetcode: leetcode.com
findAllAnagramsInString
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/*
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/*
O: 2 strings, s and p made of lowercase letters
    s will be no longer than 20
    p will be non-empty and no longer than 100
I: an array, the starting indices in string p where anagrams of s exist
C: none given
E: s is empty, no anagrams exist, p longer than s
Plan:
pretty simple brute force approach:
check if s is empty, if so, return empty array

go through every character in p
if remaining length in p is less than length of s, done
from this position, check for every letter in s contiguously
if they're all here, add this start index to the results pool
if not, move to next letter

--use a helper function
*/

var findAnagrams = function(s, p) {
  // results array, starts empty

  // var isAnagramRun = function (start)
    // copy s
    // loop from 0 to length of s
      // if p at start + loop count is not in copy s
        // return false
      // remove the character from copy s
    // return true

  // if s is empty or s is longer than p
    // return results

  // loop from start of p to length of s away from end of p
    // if isAnagramRun
      // add current index to results

  // return results;
};

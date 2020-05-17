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
I: an array, the starting indices in string s where anagrams of p exist
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

  var isAnagramRun = function (start) {
    var copyP = p;
    for (let i = 0; i < p.length; i += 1) {
      let targetIndex = copyP.indexOf(s[start + i]);
      if (targetIndex === -1) {
        return false;
      }
      copyP = copyP.slice(0, targetIndex) + copyP.slice(targetIndex + 1);
    }
    return true;
  }

  if ((s === '') || (p.length > s.length)) {
    return results;
  }

  const loopTo = s.length - p.length;
  for (let j = 0; j <= loopTo ; j += 1) {
    if (isAnagramRun(j)) {
      results.push(j);
    }
  }
  -- the above worked as brute force ut then has time out issues with very large strings


Plan #2: get more efficient!
use a sliding window algorithm

check if s is empty, if so, return empty array
if p is longer than s, return empty array

we need to have a start index for where we first see a letter in the anagram
if a letter is not in the anagram, set that start to the next letter index to move on
once we see a letter in the anagram, tally it from the anagram target and move on
one the anagram is completed, we add that start index to the results,
  then we add the letter at the start index back into the possible tally for the anagram


*/

var findAnagrams = function(s, p) {
  let results = [];
  let startIndex = 0;
  let anagramTally = {};
  let anagramLengthLeft;

  const resetAnagramTally = function() {
    anagramLengthLeft = p.length;
    anagramTally = {};
    for (let i = 0; i < p.length; i += 1) {
      if (!anagramTally[p[i]]) {
        anagramTally[p[i]] = 0;
      }
      anagramTally[p[i]] += 1;
    }
  }

  if ((s === '') || (p.length > s.length)) {
    return results;
  }

  resetAnagramTally();
  for (let i = 0; i < s.length; i += 1) {
    let currLetter = s[i];
    if (anagramTally[currLetter] === undefined) {
      startIndex = i + 1;
      if (anagramLengthLeft < p.length)
        resetAnagramTally();
    } else {
      while (anagramTally[currLetter] === 0) {
        anagramTally[s[startIndex]] += 1;
        anagramLengthLeft += 1;
        startIndex += 1;
      }

      anagramTally[currLetter] -= 1;
      anagramLengthLeft -= 1;
      if (anagramLengthLeft === 0) {
        results.push(startIndex);
        anagramTally[s[startIndex]] += 1;
        startIndex += 1;
        anagramLengthLeft += 1;
      }
    }
  }

  return results;
};

// testing
var testS1 = '';
var testP1 = '';
result1 = findAnagrams(testS1, testP1);
console.log(result1);  // []

var testS2 = 'a';
var testP2 = 'ab';
result2 = findAnagrams(testS2, testP2);
console.log(result2);  // []

var testS3 = 'abc';
var testP3 = 'abc';
result3 = findAnagrams(testS3, testP3);
console.log(result3);  // [0]

var testS4 = 'abc';
var testP4 = 'abs';
result4 = findAnagrams(testS4, testP4);
console.log(result4);  // []

var testS5 = 'hotdogs';
var testP5 = 'hot';
result5 = findAnagrams(testS5, testP5);
console.log(result5);  // [0]

var testS6 = 'cbaebabacd';
var testP6 = 'abc';
result6 = findAnagrams(testS6, testP6);
console.log(result6);  // [0, 6]

var testS7 = 'abab';
var testP7 = 'ab';
result7 = findAnagrams(testS7, testP7);
console.log(result7);  // [0, 1, 2]

var testS8 = 'hotdogs';
var testP8 = 'dog';
result8 = findAnagrams(testS8, testP8);
console.log(result8);  // [3]

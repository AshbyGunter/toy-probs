/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/*
 * @param {string} s
 * @return {number}
 */

/*
O: an integer, the index of the first non repeating character in the given string, or -1 if there are none
I: a string made up of lowercase letters
C: none
E: empty string -> return -1, all repeated characters -> return -1, no repeated chars
Plan:
  start with a -1 as the result
  brute force:
  take first letter, search the string for a repeat
  if none, return that index
  if there is one, go to next character and search the rest of the string for a repeat
  would have O(n^2)

  go through the string and build a count of each letter
  then start over and go through the string again
  the first letter with a count of 1 will be the one, return that index
  would have O(n)
*/


var firstUniqChar = function(s) {
  var counts = {}

  for (var i = 0; i < s.length; i +=1) {
    if (counts[s[i]]) {
      counts[s[i]] += 1;
    } else {
      counts[s[i]] = 1;
    }
  }
  for (var j = 0; j < s.length; j += 1) {
    if (counts[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};


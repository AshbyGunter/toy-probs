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

  alternate: go through string and try chacking from the end (last index) of each letter
  and if it's equal, then return that index
*/


var firstUniqChar = function(s) {
  var sLength = s.length;
  for (var i = 0; i < sLength; i += 1) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      return i;
    }
  }
  return -1;


  // var counts = {}

  // for (var i = 0; i < s.length; i +=1) {
  //   if (counts[s[i]]) {
  //     counts[s[i]] += 1;
  //   } else {
  //     counts[s[i]] = 1;
  //   }
  // }
  // for (var j = 0; j < s.length; j += 1) {
  //   if (counts[s[j]] === 1) {
  //     return j;
  //   }
  // }
  // return -1;
};

// testing
var test1 = '';
result1 = firstUniqChar(test1);
console.log(result1); // -1

var test2 = 'a';
result2 = firstUniqChar(test2);
console.log(result2);  // 0

var test3 = 'aa';
result3 = firstUniqChar(test3);
console.log(result3);  // -1

var test4 = 'aaa';
result4 = firstUniqChar(test4);
console.log(result4);  // -1

var test5 = 'ab';
result5 = firstUniqChar(test5);
console.log(result5);  // 0

var test6 = 'aaab';
result6 = firstUniqChar(test6);
console.log(result6);  // 3

var test7 = 'abb';
result7 = firstUniqChar(test7);
console.log(result7);  // 0

var test8 = 'leetcode';
result8 = firstUniqChar(test8);
console.log(result8);  // 0

var test9 = 'loveleetcode';
result9 = firstUniqChar(test9);
console.log(result9);  // 2




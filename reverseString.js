/*
            Reverse String problem from leetcode: leetcode.com
reverseString.js

Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

O: none, but input array will be mutated to be reversed
I: an array of characters representing a string
C: O(1) space
E: array length could be 0
Plan:
swap first and last letters
step in 1 place from front and end
repeat until front and back meet

*/

var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left += 1;
    right -= 1;
  }
};

var test = ["h","e","l","l","o"];
reverseString(test);
console.log(test);
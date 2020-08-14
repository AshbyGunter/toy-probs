/*
        Find the longest existing palindrome in a string

O: a number, the length of the longest palindrome in given string
I: a string of upper and lower case letters, of length up to 1010
C: upper and lower case do not match up
E: string could be empty
    could be only one character
    could be all one character
    could not contain a palindrome
Plan:
naive solution:
check for empty string or length of 1
start with second letter as the current letter
if letters before and after match, store both locations as a valid palindrome
if they don't match, but either the left or right letters match the current letter, extend the palindrome in that direction
if there is no match, compare the current palindrome size to the max found so far and store the largest
loop through the entire string like this

*/

var longestPalindrome = function(s) {
  // if string is empty, return 0
  if (string.length === 0) return 0;
  // if string has length of 1, return 1
  if (string.length === 1) return 1;

  // start at 2nd letter
  let maxLength = 1;

  // loop through string to start with each letter at middle of palindrome
  for (let i = 1; i < s.length; i += 1) {
    let left = i;
    let right = i;
    let currLetter = s[left];
    // loop while left letter equals right letter
    while (s[left] === s[right] && left >= 0 && right <= s.length - 1 && !(left === 0 && right === s.length - 1)) {
      // if left - 1 letter equals right + 1 letter
      if (s[left - 1] === s[right + 1]) {
        left -= 1;
        right += 1;
        currLetter = s[left];
      // else if left - 1 letter is current letter -> update left - 1
      } else if (s[left - 1] === currLetter) left -= 1
      // else if right + 1 letter is current letter -> update right + 1
      else if (s[right + 1] === currLetter) right += 1
      else break;
      let length = right - left + 1;
      maxLength = Math.max(length, maxLength);
    }
  }

  return maxLength;
};

// testing
let string;
let expected;
let result;
let test;

test = 'empty string';
string = '';
expected = 0;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'single character string';
string = 'a';
expected = 1;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'two different characters';
string = 'bc';
expected = 1;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'two matching characters';
string = 'dd';
expected = 2;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'three different characters';
string = 'efg';
expected = 1;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'three matching characters';
string = 'hhh';
expected = 3;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'four matching characters';
string = 'iiii';
expected = 4;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'entire string palindrome';
string = 'racecar';
expected = 7;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'two palindromes, first is longer';
string = 'levelbob';
expected = 5;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'two palindromes, second is longer';
string = 'boblevel';
expected = 5;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'pallindrome with leading matching characters';
string = 'aaaracecar';
expected = 7;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'pallindrome with trailing matching characters';
string = 'racecaraaa';
expected = 7;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'pallindrome with leading and trailing matching characters';
string = 'bbbbracecaraaa';
expected = 7;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

test = 'two buried palindromes';
string = 'abcbobdefglevelopmngsrtg';
expected = 5;
result = longestPalindrome(string);
console.assert(expected === result, 'on %s, Expected: "%s", but got "%s"', test, expected, result);

console.log('TESTING DONE!');
/*
         Longest Palindrome from leetcode: leetcode.com

O: a number, the longest palindrome that can be built using the letters from the given string
I: a string of upper and lower case letters
C: upper and lower case do not match, no more than 1010 characters
E: string could be empty
    could have all the same character
    could have only different characters
Plan:
count all the letters
palindromes are build with matching characters, so anything with an even count can be added
tally all of the counts that are even
there can only be 1 letter without a match, it must be in the center
so add the largest count that is odd
any other odd counts aren't fully discarded - we can use the largest even number count from each
subtract 1 from the other odd counts and add those as well

rationale/example - if we have 1 'a' and 5 'b', we can always use 4 'b' : 'bbbb', and then we can add 1 more to it to still have a valid
palindrome, so it doesn't matter if we use 'bbabb' or 'bbbbb', it ends up with the same length.

*/

var longestPalindrome = function(s) {
  if (s.length <= 1) return s.length;

  // use a map to get counts for all the letters
  let counts = new Map();

  // loop through the string and add each to the map or increment the count
  for (let i = 0; i < s.length; i += 1) {
    let letter = s[i];
    if (!counts.has(letter)) counts.set(letter, 0);
    let count = counts.get(letter) + 1;
    counts.set(letter, count);
  }

  // tally the counts
  let evens = 0;
  let odds = 0;
  let hasOdd = false;
  counts.forEach((count) => {
    if (count % 2 === 0) evens += count
    else {
      odds += count - 1;
      hasOdd = true;
    }
  });

  // sum the usable counts and add 1 if there was an odd count
  let total = evens + odds;
  if (hasOdd) total += 1;
  return total;
};

// testing
let test;
let input;
let expected;
let result;

test = 'single letter';
input = 'a';
expected = 1;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = 'empty string';
input = '';
expected = 0;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = 'two matched letters';
input = 'bb';
expected = 2;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = 'five matched letters';
input = 'bbbbb';
expected = 5;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = 'five unmatched letters';
input = 'abcde';
expected = 1;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = 'two even counts, and two odd counts';
input = 'abccccdd';
expected = 7;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = 'entire alphabet, no matches';
input = 'abcdefghijklmnopqrstuvwxyz';
expected = 1;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

test = '40 of one character';
input = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
expected = 40;
result = longestPalindrome(input);
console.assert(expected === result, 'on %s, Expected "%s", but got "%s"', test, expected, result);

console.log('TESTING DONE');
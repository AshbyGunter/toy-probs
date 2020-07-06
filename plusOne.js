/*
          Plus One problem from leetcode: leetcode.com

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

O: an array of non negative integers representing a number that has the addition of 1 to the given number
I: an array of non negative integers representing the digits of a number
C: none given
E: could be a 0 overall
Plan:
multiple ways to do this...
could join the array, convert to a number, add 1, convert to a string, split, then convert each digit back to a number
-- got this to work, but breaks down for large numbers of digits

could keep each digit in it's own bucket, add one to last elements anc use logic to carry digits going to 10
we only add one to the very last digit, so do that first

*/

var plusOne = function(digits) {
  // simple, but breaks down for larger number of digits
  // const numStr = digits.join('');
  // const num = parseInt(numStr);
  // const resultNum = num + 1;
  // const resultStrings = resultNum.toString().split('');
  // const result = resultStrings.map(num => parseInt(num));
  // return result;

  // add one to the 1's place digit
  let carry = true;
  let i = digits.length - 1;

  do {
    if (carry) {
      if (i < 0) {
        digits.unshift(0);
        i = 0;
      }
      digits[i] = digits[i] + 1;
    }
    if (digits[i] === 10) {
      carry = true;
      digits[i] = digits[i] % 10;
    } else {
      carry = false;
    }

    i -= 1;
  } while (carry);

  return digits;
};

// const testOne = [0];
// const resultOne = plusOne(testOne);
// console.log(resultOne, 'expected [1]');

// const testTwo = [4];
// const resultTwo = plusOne(testTwo);
// console.log(resultTwo, 'expected [5]');

const testThree = [9];
const resultThree = plusOne(testThree);
console.log(resultThree, 'expected [1,0]');

const testFour = [1, 2];
const resultFour = plusOne(testFour);
console.log(resultFour, 'expected [1,3]');

const testFive = [1, 9];
const resultFive = plusOne(testFive);
console.log(resultFive, 'expected [2,0]');

const testSix = [9, 9];
const resultSix = plusOne(testSix);
console.log(resultSix, 'expected [1,0,0]');

const testSeven = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const resultSeven = plusOne(testSeven);
console.log(resultSeven, 'expected [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]');
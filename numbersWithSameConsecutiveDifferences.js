/*
        Numbers With Same Consecutive Differences problem from leetcode: leetcode.com

O: an array of non-negative numbers, all with given N number of digits and and with no leading 0s,
   where the the absolute difference between every two adjacent digits is given number K
I: a number N, the number of digits the return list numbers should have, from 1 through 9
   and a number K, the absolute difference between two consecutive digits, from 0 through 9
C: no time or space constraints given
E: if K is zero, the digits will all be the same
   if N 1 is and K is 0, every possible 1 digit number would be the answer
   - but if K is anything other than 0, no difference is possible with only one digit, so there is no answer - return empty array
   when N is larger and K is small, more possibilities come from the same starting number
   - N is 4 & K is 1
   - 1210, 1212, 1232, 1234, 2101, 2121, 2123, 2321, 2323, 2343, 2345
   we have to be careful to include 0 as a possible number for any digit except the 1st
   - when would 0 be a viable answer? when n is 1 and K is 0, it would work

Plan:
use a results array to collect solutions
edge case check - if N is 1 and K is greater than 0, return an empty array
edge case check - if N is 1 and K is 0, add 0 to the solutions

** update when submitting, it looks like the leetcode definition may not disregard K if N is 1

use a working array for assembling a possible solution
start with the 1st digit - looping from 1 to 9
calculate possible next numbers and construct that step
from each of those, calculate possible next numbers
repeat until all possible answers have been generated

*/

var numsSameConsecDiff = function(N, K) {
  const results = [];

  // Edge case check
  if (N === 1) return [0,1,2,3,4,5,6,7,8,9];

  // formatResult - takes an array with a solution and reformats to a number
  const formatResult = solution => {
    const resultString = solution.join('');
    const resultNum = parseInt(resultString);
    return resultNum;
  }

  // nextDigits - recursive function that will take a working solution and will construct the next possible digits
  const nextDigits = inProgress => {
    if (inProgress.length === N) {
      const result = formatResult(inProgress);
      results.push(result);
      return;
    }

    const lastDigit = inProgress[inProgress.length - 1];

    let possibleNext = lastDigit - K;
    if (possibleNext >= 0) {
      inProgress.push(possibleNext);
      nextDigits(inProgress);
      inProgress.pop();
    }

    if (K > 0) {
      possibleNext = lastDigit + K;
      if (possibleNext <= 9) {
        inProgress.push(possibleNext);
        nextDigits(inProgress);
        inProgress.pop();
      }
    }
  }

  for (let i = 1; i <= 9; i += 1) {
    const workingSolution = [i];
    nextDigits(workingSolution);
  }

  return results;
};

// testing
let test;
let numDigits;
let diff;
let expect;
let result;

test = 'edge case of N = 1 and K is greater than 0';
numDigits = 1;
diff = 1;
expect = [0,1,2,3,4,5,6,7,8,9];
result = numsSameConsecDiff(numDigits, diff);
expect = JSON.stringify(expect);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = '2 digit number with large K';
numDigits = 2;
diff = 6;
expect = [17,28,39,60,71,82,93];
result = numsSameConsecDiff(numDigits, diff);
expect = JSON.stringify(expect);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'weird case where N is 1 and K is 0';
numDigits = 1;
diff = 0;
expect = [0,1,2,3,4,5,6,7,8,9];
result = numsSameConsecDiff(numDigits, diff);
expect = JSON.stringify(expect);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'N of 3 with large K';
numDigits = 3;
diff = 7;
expect = [181,292,707,818,929];
result = numsSameConsecDiff(numDigits, diff);
expect = JSON.stringify(expect);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = '2 digit number with K of 1';
numDigits = 2;
diff = 1;
expect = [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98];
result = numsSameConsecDiff(numDigits, diff);
expect = JSON.stringify(expect);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'K of 0';
numDigits = 2;
diff = 0;
expect = [11,22,33,44,55,66,77,88,99];
result = numsSameConsecDiff(numDigits, diff);
expect = JSON.stringify(expect);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

console.log('DONE TESTING!');
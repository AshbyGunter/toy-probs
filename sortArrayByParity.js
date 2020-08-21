/*
      Sort Array By Parity problem from leetcode: leetcode.com

O: an array, the given array rearranged such that all even numbers come before all odd numbers
I: an array of non-negative inteers, the length is from 1 through 5000, the numbers are from 0 through 5000
C: no time or space constraints given
E: aray could be all even or odd numbers
   could contain only 1 number
   may contain only 1 odd and the rest even or vice versa
   number aren't expressed as unique, all elements could be the same number
   array may already be sorted correctly
   could be sorted exactly opposite, with all odds first, then evens
   could be set up back and forth, ie odd, even, odd, even, etc.
Plan:
option 1:
use the build in array sort and give it a method that weighs even numbers lower than odd numbers
time: O(n log n)
space: sorts in place, O(1)

option 2:
set up evens and odds arrays
go through input and put each element in it's respective correct array
concatenate the two arrays together and return result
time:
1 run through input = O(n)
concatenating arrays... O(n)?
overall O(n), I think
space: using n extra storage, so O(n)

option:
use one results array
go through the input, add evens to the front of results, and add odds to the back
each shift to the front of the array is O(length of array), I think, making this expensive

After running options 1 & 2 a few times, as expected, option 2 ran a bit faster than option 1

*/

var sortArrayByParity = function(A) {
  // option 2:
  const evens = [];
  const odds = [];

  A.forEach(num => {
    if (num %2 === 0) evens.push(num)
    else odds.push(num);
  });
  return [...evens, ...odds];

  /*
  option 1:
  A.sort((a, b) => {
    if (a % 2 === 0) return -1
    else return 1;
  });
  return A;
  */
};

// testing
let test;
let input;
let expect;
let result;

console.time('tactic timing');

test = '1 element in array';
input = [1];
expect = [1]
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = '2 elements, order needs to change';
input = [1, 2];
expect = [2, 1]
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = '10 elements, all odds before evens';
input = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// expect = [2,4,6,8,10,9,7,5,3,1];  // for option 1
expect = [2,4,6,8,10,1,3,5,7,9];
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = '10 elements, all evens before odds';
input = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
// expect = [2,4,6,8,10,9,7,5,3,1]  // for option 1
expect = [2,4,6,8,10,1,3,5,7,9];  // for option 2
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = '10 elements, all the same number';
input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
expect = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'all evens numbers';
input = [2, 4, 6, 8, 10, 12, 14, 16, 18];
expect = [2, 4, 6, 8, 10, 12, 14, 16, 18]
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'all odd numbers';
input = [1, 3, 5, 7, 9, 11, 13, 15, 17];
// expect = [17,15,13,11,9,7,5,3,1] // for option 1
expect = [1,3,5,7,9,11,13,15,17]; // for option 2
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'all evens numbers, except 1st is odd';
input = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18];
expect = [2, 4, 6, 8, 10, 12, 14, 16, 18, 1]
expect = JSON.stringify(expect);
result = sortArrayByParity(input);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);


console.log('TESTING DONE');
console.timeEnd('tactic timing');
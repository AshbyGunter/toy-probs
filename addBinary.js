/*
        Add Binary problem from leetcode: leetcode.com

O: a string of 1s and 0s, representing a binary number with no leading 0s; "0" is used for 0; the result of adding the given binaries
I: two strings of 1s and 0s representing binary numbers, as above
C: none given
E: strings are not empty and consist of only 0 and 1
Plan:
convert the strings to binary...
convert each to binary
add them
convert back to string
** note that this works as intended, but will break down with very large strings


do the math with the strings...
pad out the shorter string with leading 0s
go through strings from back to front and add binary digits to construct the answer
there should not be any leading 0s to worry about after adding
return said answer

Steps:
space not an issue:
  make copies of both strings
  determine if one number has more digits than the other and pad it out with leading 0s
use a carry variable - start at 0
loop from the end of both strings to the front
-- note that the indexing is tricky - they will likely be differing lengths
-- need to track that correctly
anything not a 1 at current is counted as 0, so don't have to worry about undefined
make an addition at that spot - both strings' digit and carry
set the result for that digit and carry as needed

after the loop is over, if carry is 1, put it on the front of the result string

*/

var addBinary = function(a, b) {
  // short circuit if either is 0
  if (a === '0') return b;
  if (b === '0') return a;

  // get length of larger string
  const length = Math.max(a.length, b.length);

  let carry = 0;
  let result = ``;
  for (let i = 1; i <= length; i += 1) {
    let aDigit = a[a.length - i] === '1' ? 1 : 0;
    let bDigit = b[b.length - i] === '1' ? 1 : 0;
    let digitSum = aDigit + bDigit + carry;
    // set result for digit add
    if (digitSum === 0 || digitSum === 2) result = `0${result}`
    else result = `1${result}`;
    // set carry for next digit
    if (digitSum === 0 || digitSum === 1) carry = 0
    else carry = 1;
  }

  // if carry is 1, tack it onto the result
  if (carry === 1) result = `1${result}`;
  return result;



  // converstion algoritm:
  // works, but breaks down for very long strings
  // const binA = parseInt(a, 2);
  // const binB = parseInt(b, 2);

  // const answer = binA + binB;
  // const result = answer.toString(2);
  // return result;
};

let aInput;
let bInput;
let expected;
let result;

aInput = '0';
bInput = '0';
expected = '0';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '1';
bInput = '0';
expected = '1';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '1';
bInput = '1';
expected = '10';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '10';
bInput = '01';
expected = '11';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '11';
bInput = '1';
expected = '100';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '111';
bInput = '0';
expected = '111';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '101';
bInput = '10';
expected = '111';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

aInput = '10000000';
bInput = '1';
expected = '10000001';
result = addBinary(aInput, bInput);
console.assert(expected === result, 'got %s from %s', result, expected);
// console.log('result', JSON.stringify(result), 'expected', JSON.stringify(expected));

console.log('Testing Done');

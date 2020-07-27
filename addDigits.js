/*
            Add Digits problem from leetcode: leetcode.com

O: a number, one digit and non-negative, the result of summing given numbers' digits repeatedly until the answer is a single digit
I: a number, non-negative
C: none given, but challenged to solve in O(1) time
E: number could be 0 could be very large
Plan:
first the naive solution -
if given 0, return 0
convert to a string
loop while the number has more than one digit
loop through string and make a sum
convert the sum into the same string
once done with loops, convert back to number and return

O(1) solution
only results possible are 0 through 9
so we need a mod 9 operation, and breaks will happen on natural multiples of 9 to come out as 9
9, 18 27, 36, etc all equal 9 for the add digits sum
but 9 % 9 = 0 so we have to do some figuring
we can't just add 1, as it makes what should be a 9 come out 1
if we subtract 1 from the input and ad 1 after the mod
(wrote down some sequences and played with numbers a bit)
*/

var addDigits = function(num) {
  // sequence based solution:
  return (num - 1) % 9 + 1;

  // naive solution:
  // digits = num.toString();
  // while (digits.length > 1) {
  //   let sum = 0;
  //   for (let i = 0; i < digits.length; i += 1) sum += parseInt(digits[i]);
  //   digits = sum.toString();
  // }
  // return parseInt(digits);
};

// testing
let num;
let result;

num = 0;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 1;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 5;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 9;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 10;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 11;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 16;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 17;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 18;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 19;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 22;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 26;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 27;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 28;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 34;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 35;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 36;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 37;
result = addDigits(num);
console.log('result:', result, 'from:', num);

num = 40;
result = addDigits(num);
console.log('result:', result, 'from:', num);
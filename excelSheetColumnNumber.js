/*
         Excel Sheet Column Number problem from leetcode: leetcode.com


O: a number, the column in Excel represented by the given input string
I: a string of capital letters with a length from 1 to 7, representing a column in Excel
C: none given
E: lowest is "A" = 1, largest is "FXSHRXW"
Plan:
essentially the string represents a number in base 26, from A = 1 to Z = 26
String.prototype.charCodeAt yields A = 65, Z = 90
so subtract 64 to get A = 1 and Z = 26
that gets the value of each spot
each digit will need to be multiplied by successive powers of 26
far right "digit" is "1s", so 26 to the 0th power

*/

var titleToNumber = function(s) {
  let result = 0;

  // helper function takes letter and digit placement to calculate the value for that place
  var calcDigit = function(letter, place) {
    let letterValue = letter.charCodeAt() - 64;
    return letterValue * 26 ** place;
  }

  let digit = 0;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    result += calcDigit(s[i], digit);
    digit += 1;
  }

  return result;
};

// testing
let test = "A";
let result = titleToNumber(test);
console.log(result);

test = "Z";
result = titleToNumber(test);
console.log(result);

test = "AA";
result = titleToNumber(test);
console.log(result);

test = "ZY";
result = titleToNumber(test);
console.log(result);
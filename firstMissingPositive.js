/*
              First Missing Positive problem from leetcode: leetcode.com

O: an integer, the smallest positive integer greater than 0, that does not exist in the given array
I: an array of 1 to 100k integers in the range of -1M to +1M
C: none given
E: the array could have only 1 element, it could have all negative numbers, numbers could be repeated,
      first positive not in array could be very large, ie - sequence of positive numbers before a gap
      first positve could be between a negative and another positive number
      array may contain only positive numbers
      assuming there IS always a missing positive integer in the array
Plan:
brute force solution:
count up from 1
check array for the number
return the 1st number that doesn't exist
poor time complexity - O(n^2)

sorting option:
if array has only 1 element, answer will be 1 or 2
sort the array first for O(n log n)
shortcut to return 1 if all elements are negative or 0
get to the 1st positive integer that is NOT 0
define a lastPos value of 0
iterate through A from this position
if current value is lastPos + 1, update lastPos
else return lastPos + 1
if we get through the loop and have not found answer, return lastPos + 1

*/

var firstMissingPositive = function(nums) {
  // if length is 1, then answer is 1 if element is 0 or less or larger than 1, otherwise it is 2
  if (nums.length === 1) {
    if (nums[0] <= 0 || nums[0] > 1) return 1;
    return 2;
  }

  // sort array in ascending order
  nums.sort((a, b) => a - b);

  // if after sorting the last element is 0 or less, the answer is 1
  if (nums[nums.length - 1] <= 0) return 1;

  // all cases will have positive numbers but there may or may not be a 0
  // loop to the 1st integer greater than 0
  let index = 0;
  while (nums[index] <= 0) index += 1;

  let lastPos = 1;
  for (; index < nums.length; index += 1) {
    if (nums[index] === lastPos) lastPos += 1
    else if (nums[index] + 1 !== lastPos) return lastPos;
  }
  return lastPos;
}

// testing
// just a 0
let data = [0];
let result = firstMissingPositive(data);
console.log(result, 'should be 1');

// just a 1
data = [1];
result = firstMissingPositive(data);
console.log(result, 'should be 2');

// just a 2
data = [2];
result = firstMissingPositive(data);
console.log(result, 'should be 1');

// just a negative number
data = [-2];
result = firstMissingPositive(data);
console.log(result, 'should be 1');

// several negative numbers with a 0
data = [-10, -9, 0, -4, -6, -22, -4];
result = firstMissingPositive(data);
console.log(result, 'should be 1');

// several negative numbers without a 0
data = [-10, -9, -4, -6, -22, -4];
result = firstMissingPositive(data);
console.log(result, 'should be 1');

// mixed neg and pos with a 0
data = [-10, -2, 0, 1, 3];
result = firstMissingPositive(data);
console.log(result, 'should be 2');

// mixed neg and pos without a 0
data = [-10, -4, -2, 1, 3];
result = firstMissingPositive(data);
console.log(result, 'should be 2');

// mixed neg and pos with a 0, not in order
data = [3, -4, 0, 1, -10];
result = firstMissingPositive(data);
console.log(result, 'should be 2');

// mixed neg and pos without a 0, not in order - repeated 1
data = [1, -4, -10, 2, 1, -5, 6];
result = firstMissingPositive(data);
console.log(result, 'should be 3');

// 1st positive is after last element, array includes a 0
data = [0, 1, 2, 3];
result = firstMissingPositive(data);
console.log(result, 'should be 4');

// 1st positive is after last element, array has no 0
data = [1, 2, 3];
result = firstMissingPositive(data);
console.log(result, 'should be 4');

// longer mixed array with a 0 and gap in positives
data = [-10, -9, -4, -6, -22, -4, 0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
result = firstMissingPositive(data);
console.log(result, 'should be 6');

// longer mixed array with no 0 and gap in positives
data = [-10, -9, -4, -6, -22, -4, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
result = firstMissingPositive(data);
console.log(result, 'should be 6');
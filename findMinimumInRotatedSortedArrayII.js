/*
          Find Minimum in Rotated Sorted Array II problem from leetcode: leetcode.com

O: a number, the min element in the given array
I: an array, made of numbers and sorted, but rotated at some unknown point
C: none given
E: the array could be empty
   the array can have duplicate numbers;
   the minimum could be the duplicated number
   the array could be all the min number
   the array may not have been rotated
   the array could be very large
Plan:
use a form of binary search
go to the middle of the array
compare that element to the last
if it's less, then the lowest number could be the mid or somewhere to the left
if it's larger, then the min is to the right of the element
if it's equal, try to the left, but including the current as it's not ruled out aas the min
repeat until there is only one element under consideration, this will be the smallest, return it

*/

var findMin = function(nums) {
  // really should throw an error, but this is leetcode...
  if (nums.length === 0) return null;
  let right = nums.length - 1;
  const lastNum = nums[right];

  // start left at the 1st element that is not the same as the lastNum
  let left = 0;
  while (nums[left] === lastNum) left += 1;
  // if left has gone out of bound, nums has only the same number
  if (left > right) return lastNum;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > lastNum) left = mid + 1
    else right = mid;
  }

  return nums[left];
};

// testing
let nums;
let expect;
let test;
let result;

nums = [];
expect = null;
test = 'input empty';
result = findMin(nums);
console.assert(expect === result, 'expected %s, but got %s from %s', expect, result, test);

nums = [1];
expect = 1;
test = 'only one element';
result = findMin(nums);
console.assert(expect === result, 'expected %s, but got %s from %s', expect, result, test);

nums = [5,5,5,5,5,5];
expect = 5;
test = 'several of min element only';
result = findMin(nums);
console.assert(expect === result, 'expected %s, but got %s from %s', expect, result, test);

nums = [1,3,5];
expect = 1;
test = 'min is 1st element';
result = findMin(nums);
console.assert(expect === result, 'expected %s, but got %s from %s', expect, result, test);

nums = [2,2,2,0,1];
expect = 0;
test = 'non-min repeated for more than half of input array';
result = findMin(nums);
console.assert(expect === result, 'expected %s, but got %s from %s', expect, result, test);

nums = [3,1,3];
expect = 1;
test = 'input rotated in the middle of duplicates that are not min';
result = findMin(nums);
console.assert(expect === result, 'expected %s, but got %s from %s', expect, result, test);

console.log('DONE TESTING!');
/*
        H-Index problem from leetcode: leetcode.com

O: an integer, the h-index of the given list; the largest example where h of the numbers are at least h or larger and the rest of the numbers are no larger than h
I: a n array of numbers
C: none given
E: list could be empty, it could be all one number which is very low, 0, or very high
    there oculd be a very diverse range of numbers, or the array could be very long
    the h-index can not be larger than the size of the array
Plan:
option one:
sort the list
need to go through the list and figure the max
compare the count left to the element, lower of the two is a potential max
track a running max through the list to return

option two:
create an array as long as the given list, initialize each element to 0
go through the input and use the array to create a count of each element
-- if any elements are larger than the length of the list, include them with the last element
starting with a default of 0, go through this array
track the count of the numbers, and after they are encountered, subtract that amount
so for each place, the min between the count that is left and the element is a possible new max
but there have to be enough
*/

var hIndex = function(citations) {
  if (citations.length === 0) return 0;

  // bucket method:
  const numCitations = citations.length;
  const hList = new Array(numCitations + 1).fill(0);
  for (let i = 0; i < numCitations; i += 1) {
    let entry = citations[i];
    if (entry >= numCitations) hList[numCitations] += 1
    else hList[entry] += 1;
  }

  let max = 0;
  let citationsLeft = numCitations;
  for (let i = 0; i < hList.length; i += 1) {
    let possibleMax = Math.min(i, citationsLeft);
    max = Math.max(max, possibleMax);
    citationsLeft -= hList[i];
  }
  return max;


  // sorting method:
  // citations.sort((a, b) => b - a);
  // let max = 0;
  // for (let count = citations.length - 1; count >= 0; count -= 1) {
  //   let possibleMax = Math.min(count + 1, citations[count]);
  //   max = Math.max(max, possibleMax);
  // }
  // return max;
};


// testing
let list;
let result;
let expected;
let test;

list = [];
expected = 0;
result = hIndex(list);
test = 'empty list'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

list = [3,0,6,1,5];
expected = 3;
result = hIndex(list);
test = 'unsorted mixed list'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

list = [6];
expected = 1;
result = hIndex(list);
test = 'single item grater than 1'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

list = [0];
expected = 0;
result = hIndex(list);
test = 'single item zero'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

list = [0, 0, 0, 0, 0, 0, 0];
expected = 0;
result = hIndex(list);
test = 'list of zeros'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

list = [1, 1, 1];
expected = 1;
result = hIndex(list);
test = 'list of ones'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

list = [7, 7, 7, 7];
expected = 4;
result = hIndex(list);
test = 'short list, all same and greater than count'
console.assert(expected === result, 'Expected "%s", but got "%s" for %s', expected, result, test);

console.log('DONE TESTING!');
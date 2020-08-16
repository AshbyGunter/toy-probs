/*
        Non-overlapping Intervals problem from leetcode: leetcode.com

O:  a number, the minimun number of intervals to remove from the given list of intervals to elimate overlaps
I:  a list of tuples representing intervals, end points are larger than start points
C:  none given
E:  list could be empty
    intevals may all overlap
    none of the inverals might overlap
    some intervals could be very large
    some intevals could be small
    intervals may have intermittant gaps
    intervals may have negative numbers
Plan:
sort the list of intervals by the first endpoint, then by the second enpoint if the first matches
the idea is to get them in order and put the smaller ones in front of the larger ones
then do a greedy run through the list
can't just grab the 1st intveral because it may be larger than others
ex - [1,20], [2,3], [3,4]s
we know a following interval will always have an equal or larger start after sorting
we want the next interval with the lowest end point

check for at least one interval
so we will start with an interval count of 1
and a nextStart will be the end point from the 1st interval
if the next interval starts at that nextStart or later, we can count that one and base the nextStart on that
if the next interval has a lower nextStart, we adopt that as the new nextStart but do not increment the count
after going through all the intervals thus, subtract the total starting number of intervals from the use count we kept
*/

var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;

  // sort the intervals fist by smallest start point, then by smalled end point
  intervals.sort((intOne, intTwo) => {
    if (intOne[0] === intTwo[0]) return intOne[1] - intTwo[1]
    else return intOne[0] - intTwo[0];
  });

  // count of the intervals used
  let count = 0;
  // smallest end point of intervals looked at so far
  smallest = -Infinity;
  for (let i = 0; i < intervals.length; i += 1) {
    let start = intervals[i][0];
    let end = intervals[i][1];
    if (start >= smallest) {
      count += 1;
      smallest = end;

    } else {
      if (end < smallest) smallest = end;
    }
  }

  return intervals.length - count;
};

// testing
let test;
let input;
let expect;
let result;

test = 'empty list';
input = [];
expect = 0;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = 'one interval';
input = [[3,7]];
expect = 0;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = 'matching intervals';
input = [[1,2], [1,2]];
expect = 1;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = 'no overlaps with gaps in between intervals';
input = [[1,2], [5,7], [10,15]];
expect = 0;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = 'several, all overlapping';
input = [[1,7], [2,9], [3,7], [6,8]];
expect = 3;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = '1st interval overlaps all others, no other overlaps';
input = [[1,20], [2,5], [5,7], [9,12]];
expect = 1;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = '1 overlapper, not sorted';
input = [[1,2],[2,3],[3,4],[1,3]];
expect = 1;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

test = 'includes an interval with negative numbers';
input = [[5,8], [2,5], [-20,-5], [8,10], [-6,-1]];
expect = 1;
result = eraseOverlapIntervals(input);
console.assert(expect === result, 'on %s; Expected "%s", but got "%s"', test, expect, result);

console.log('TESTING DONE!');
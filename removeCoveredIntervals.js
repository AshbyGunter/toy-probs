/*
            Remove Covered Intervals problem from leetcode: leetcode.com

O: an integer, the number of interveral not covered by another interval
I: an array of intervals
C: none given
E: could be only one or none, could have all covered by one larger interval at the end of array, could be none covered by others
Plan:
return 0 if empty
sort the intervals based on 1st value
possibleCover will be the 1st
loop through the rest, starting with second
if possibleCover encompasses the current interval, do nothing
if not, set possibleCover to the current interval and increment a count
return the accumulated count
*/

var removeCoveredIntervals = function(intervals) {
  // if intervals is empty, return 0
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]
    else return a[0] - b[0];
  });
  let count = 1;
  let possibleCover = intervals[0];
  // loop through intervals, starting at index 1
  for (let i = 1; i < intervals.length; i += 1) {
    // if possibleCover does not encompass current
    if (possibleCover[0] > intervals[i][0] || possibleCover[1] < intervals[i][1]) {
      possibleCover = intervals[i];
      count += 1;
    }
  }

  return count;
};

let test;
let result;

test = [];
result = removeCoveredIntervals(test);
console.log(result);

test = [[1,4],[2,3]];
result = removeCoveredIntervals(test);
console.log(result);

test = [[[1,2],[1,4],[3,4]]];
result = removeCoveredIntervals(test);
console.log(result);

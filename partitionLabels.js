/*
          Partition Labels problem from leetcode: leetcode.com

O: an array of integers, the sizes of the maximum number of segments that can be made from the given string where each letter appears in only one segment
I: a string of lowercase letters of length 1 to 500
C: none given
E: could all be one letter, 1st letter could be last letter, could be runs of each letter with up to 26 segments
Plan:
go through the string
store the last index of each letter in the string
set the start and end of segment at the beginning of the string
go through the string again
look up the last index of the current letter
if the last index of the current letter is larger than the current end, replace it with this value
once we reach the end of the segment, when current is the same as end, store that length as a result and set start and end to the next letter

once done going through the string, return the accumulation of results

*/

var partitionLabels = function(S) {
  const results = [];
  const lastIndex = new Map();
  let start = 0;
  let end = 0;

  // loop through string
  for (let i = 0; i < S.length; i += 1) {
    // set letter w/ index in map
    lastIndex.set(S[i], i);
  }

  // loop through the string
  for (let i = 0; i < S.length; i += 1) {
    // end gets max of end and lastIndex of current
    end = Math.max(end, lastIndex.get(S[i]));
    // if current index is end
    if (end === i) {
      // end - start + 1 is the lengh of segment, push that into results
      results.push(end - start + 1);
      // set start to current index + 1
      start = i + 1;
    }
  }

  return results;
};
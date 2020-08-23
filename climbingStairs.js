/*
      Climbing Stairs problem from leetcode: leetcode.com

Started as recustion practice.
Refactored for memoization practice.

O: a number, the distinct ways given number of steps can be ascended by taking 1 or 2 steps at a time
I: a number, the amount of stairs to be climbed, will be from 1 through 45
C: no time or space constraints given
E: always at least 1 stair
Plan:
we need to track how many steps are left to take
also need some kind of count of number of valid solutions
each time we can take a step, we need to try both 1 step and 2 steps

pure recursion:
get the result of trying 1 step
  - which would be a call to same function with the number of steps reduced by 1
plus the result of tryying 2 steps
  - which would be a call to same function with number of steps reduced by 2
return the sum of the two

indirect recusion / backtracking:
use an internal variable to track valid solutions
use an internal function, call with number of steps taken
if number of steps taken matches number of steps, increment tally
if number of steps taken is larger than number of steps, just return
otherwise
- calls itself with number of steps taken + 1
- calls itsels with number of steps taken + 2

improve time with memoization
Store every solution with a given number of stairs in an array,
- use the index as the number of stairs
Whenever we need the solution, we look it up, or calculate and add it to the array

*/

var climbStairs = function(n) {
  // using memoization
  const solutions = [1];

  const findSolutions = stairsLeft => {
    if (stairsLeft < 0) return 0;
    if (solutions[stairsLeft] !== undefined) return solutions[stairsLeft];

    // calculate the solution
    const after1Step = findSolutions(stairsLeft - 1);
    const after2Steps = findSolutions(stairsLeft - 2);
    const sum = after1Step + after2Steps;
    solutions.push(sum);
    return sum;
  }

  const result = findSolutions(n);
  return result;


  /*
  // pure recursion; effective, but times out on leetcode
  if (n < 0) return 0;
  if (n === 0) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
  */

  /*
  // indirect recursion via backtracking; also works, but times out
  numSolutions = 0;
  const countSteps = stepsTaken => {
    if (stepsTaken === n) numSolutions += 1
    else if (stepsTaken < n) {
      countSteps(stepsTaken + 1);
      countSteps(stepsTaken + 2);
    }
  }
  countSteps(0);
  return numSolutions;
  */
};


// testing
let test;
let input;
let expect;
let result;

test = 'smallest number of stairs allowed in prompt';
input = 1;
expect = 1;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, result);

test = 'small number of stairs allowed in prompt';
input = 2;
expect = 2;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, result);

test = 'small number of stairs allowed in prompt';
input = 3;
expect = 3;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, result);

test = 'small number of stairs allowed in prompt';
input = 4;
expect = 5;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, result);

test = 'small number of stairs allowed in prompt';
input = 5;
expect = 8;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, result);

test = 'small number of stairs allowed in prompt';
input = 6;
expect = 13;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, result);

test = '2nd highest allowed number of stairs'
input = 44;
expect = 1134903170;
result = climbStairs(input);
console.assert(expect === result, 'on %s; Expected: "%s", but got "%s"', test, expect, input);


console.log('TESTING DONE!');
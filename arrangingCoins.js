/*
          Arranging Coins problem from leetcode: leetcode.com

You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
Given n, find the total number of full staircase rows that can be formed.
n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:
n = 5
The coins can form the following rows:
¤
¤ ¤
¤ ¤
Because the 3rd row is incomplete, we return 2.

Example 2:
n = 8
The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤
Because the 4th row is incomplete, we return 3.

O: an integer, the number of complete rows that can be formed
I: an integer n, the number of coins to be used in building the staircase
C: none given
E: n could be 0
Plan:
Simple method:
start with 1 step and iterate up until the pool of coins left can't make a full step
track the pool of coins left and what step was done last
0 step, and full pool
at 1, subtract 1 from pool
if pool is not negative, increment step
loop back until pool is negative
return the last step constructed

*/

var arrangeCoins = function(n) {
  let pool = n;
  let step = 0;

  while (pool > 0) {
    step += 1;
    pool -= step;
  }

  if (pool === 0) return step;
  return step - 1;
};
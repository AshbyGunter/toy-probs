/*

              Two City Scheduling problem from leet code: leetcode.com
twoCityScheduling.js


There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Example 1:
Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation:
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.
The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

Note:
1 <= costs.length <= 100
It is guaranteed that costs.length is even.
1 <= costs[i][0], costs[i][1] <= 1000

@param {number[][]} costs
@return {number}

O: the minimal total cost with an even number of costs from the input array
I: an array of tuples, all elements are integers
C: none given
E: costs could be the same for one element
Plan:
need to track how many are sent to A and B, and a running total
we can sort the array by the difference between the costs
starting with the largest difference
then go through sorted list largest diff to smallest
add the smaller amount for each, but track the count as to how many go to A and how many to B
once one reaches a count of half of the length of the array, have to add the rest to the other list
*/

var twoCitySchedCost = function(costs) {
  // let sentToA = 0;
  // let sentToB = 0;
  // const halfOfPool = costs.length / 2
  // let runningTotal = 0;

  // sort costs by the absolutely value of the difference

  // loop through the sorted array
    // if A is less and sentToA is less than or equal to half of pool or sentToB is equal to half of pool
      // add A cost to running total
      // increment sentToA
    // else
      // add B cost to running total
      // increemnt sentToB

  // return runningTotal
};
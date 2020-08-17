/*
      Distribute Candies to People problem from leetcode: leetcode.com

O: an array of numbers, it will have a length defined by the given number of people, and the elements will be the qauntities of candy
    given to each person until the candy runs out, based on going looping continuously through the list of people and giving candy
    start with 1, and each time increase the number given by 1 until the given amount of candy is depleted
I: a number, the total number of candies to give out, and another number, the number of people receiving candies
C: no time or space contraints given;
    number of people is from 1 through 1000,
    number of candies is from 1 through 10^9
E: there could be just one person, or just one candy
    the number of either could be very large
Plan:
naive solution:
build an array of length defined by number of people, and start off everything at 0
keep track of the number of candies to give, make sure to increase by 1 every time
keep looping until candies run out, so while there are candies to give out
loop through the array of people
check that there are enough canides to meet the give amount - if not, set that give amount to the amount left
decrease the number of candies by the amount to give
increase the element by the number of candies to give
if there are no candies left after giving, break out of the loops
after the looping is done, return the array of candy amounts

*/

var distributeCandies = function(candies, num_people) {
  // create an array for the candy counts per person and fill it with 0s
  let candyCounts = new Array(num_people).fill(0);

  // Distribute candies
  let candiesToGive = 1;
  while (candies > 0) {
    for (let i = 0; i < candyCounts.length; i += 1) {
      candies -= candiesToGive;
      candyCounts[i] += candiesToGive;
      // if the number of candies has gone negative, we need to fix the last count and break out of the loop
      if (candies < 0) {
        candyCounts[i] += candies;
        break;
      }
      candiesToGive += 1;
    }
  }

  return candyCounts;
};

// testing
let test;
let candyInput;
let peopleInput;
let expect;
let result;

test = '1 candy and 1 person';
candyInput = 1;
peopleInput = 1;
expect = [1];
expect = JSON.stringify(expect);
result = distributeCandies(candyInput, peopleInput);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = '1 candy and multiple people';
candyInput = 1;
peopleInput = 5;
expect = [1, 0, 0, 0, 0];
expect = JSON.stringify(expect);
result = distributeCandies(candyInput, peopleInput);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'multiple candies and 1 person';
candyInput = 5;
peopleInput = 1;
expect = [5];
expect = JSON.stringify(expect);
result = distributeCandies(candyInput, peopleInput);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'candies run out on last person';
candyInput = 15;
peopleInput = 5;
expect = [1, 2, 3, 4, 5];
expect = JSON.stringify(expect);
result = distributeCandies(candyInput, peopleInput);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'candies run out on first person in second pass';
candyInput = 17;
peopleInput = 5;
expect = [3, 2, 3, 4, 5];
expect = JSON.stringify(expect);
result = distributeCandies(candyInput, peopleInput);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

test = 'candies run out on last person after 3rd pass';
candyInput = 45;
peopleInput = 3;
expect = [12, 15, 18];
expect = JSON.stringify(expect);
result = distributeCandies(candyInput, peopleInput);
result = JSON.stringify(result);
console.assert(expect === result, 'on %s, Expected "%s", but got "%s"', test, expect, result);

console.log('DONE TESTING!');
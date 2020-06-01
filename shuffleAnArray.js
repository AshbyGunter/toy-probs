/*
        Shuffle an Array problem from leetcode: https://leetcode.com/problems/shuffle-an-array/
Shuffle a set of numbers without duplicates.

Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();



*/


/*
 * @param {number[]} nums
 O: the Solution object created with given input
 I: an array of numbers
 C: none given
 E: assuming input is a valid array of unique numbers
 Plan:
 store the given input array
 make a copy to shuffle
 */
var Solution = function(nums) {
  this.original = nums;
  this.shuffleCopy = [...nums];
};

/*
 * Resets the array to its original configuration and return it.
 * @return {number[]}

 O: a copy of the original input array
 I: none (this would be an instance of Solution)
 C: none given, but should not be the original array itself
 E:
 Plan:
 just make a new copy of the original array

 */
Solution.prototype.reset = function() {
  this.shuffleCopy = [...this.original];
  return this.shuffleCopy;
};

/*
 * Returns a random shuffling of the array.
 * @return {number[]}

 O: the original array randomly shuffled in an unbiased way
 I: none, acting on the instance of the object Solution calling
 C: none given
 E: none
 Plan:
 a Fisher-Yates shuffle
 loop through the shuffleCopy
 randomly select one of the remaining elements and swap with current

 */
Solution.prototype.shuffle = function() {
  let max = this.shuffleCopy.length;
  for (let i = 0; i < this.shuffleCopy.length; i += 1) {
    let min = i;
    let indexToSwap = Math.floor(Math.random() * (max - min) + min)
    let shuffledElement = this.shuffleCopy[indexToSwap];
    this.shuffleCopy[indexToSwap] = this.shuffleCopy[i];
    this.shuffleCopy[i] = shuffledElement;
  }

  return this.shuffleCopy;
};

/*
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
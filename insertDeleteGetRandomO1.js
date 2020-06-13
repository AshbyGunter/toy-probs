/*
              Insert Delete GetRandom O(1) problem from leetcode: leetcode.com
insertDeleteGetRandomO1.js

Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

*/

// use a map! key will be the data item with value being index data item is also stored in an array
var RandomizedSet = function() {
  this._valueIndices = new Map();
  this._items = [];
};

RandomizedSet.prototype.insert = function(val) {
  if (this._valueIndices.has(val)) return false;
  this._items.push(val);
  this._valueIndices.set(val, this._items.length - 1);
  return true;
};

// if the value is not the last item in the array do the next steps
// store the last item in the array
// put that item in the index indicated in the map for the val passed in
// and update the map entry for that value
// always do these last two:
// pop the last item from the array
// delete the map entry for the value passed in
RandomizedSet.prototype.remove = function(val) {
  if (!this._valueIndices.has(val)) return false;

  if (val !== this._items[this._items.length - 1]) {
    const temp = this._items[this._items.length - 1];
    const newIndex = this._valueIndices.get(val);
    this._items[newIndex] = temp;
    this._valueIndices.set(temp, newIndex);
  }

  this._items.pop();
  this._valueIndices.delete(val);
  return true;
};

RandomizedSet.prototype.getRandom = function() {
  const randIndex = Math.floor(Math.random() * this._items.length);
  return this._items[randIndex];
};

// testing
var randSet = new RandomizedSet();
console.log(randSet.insert(0));  // true
console.log(randSet);

console.log(randSet.insert(0));  // false

console.log(randSet.insert(1));  // true
console.log(randSet);

console.log(randSet.remove(0));  // true
console.log(randSet);

console.log(randSet.insert(2));  // true
console.log(randSet.remove(1));  // true
console.log(randSet);
console.log(randSet.getRandom());  // 2
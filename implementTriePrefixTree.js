/*

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

*/

/*
 * Initialize your data structure here.
 */
var Trie = function() {
  this.value = '';
  this.isEndOfWord = false;
  this.children = [];
};

// searches the current node's children and return the index of the child with the matching character value
// or -1 if there is not a match
Trie.prototype._findChild = function(char) {
  const match = (node) => node.value === char;

  return this.children.findIndex(match);
}

/*
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 Plan:
 check for first character among this' children
 if does not exist
  - add a new child with the value of the 1st character in word
 otherwise, find and store that child node
 if the length of word is 1 now, set the isEndOfWord of that child to true
 otherwise, call insert with the word minus the first character
 */
Trie.prototype.insert = function(word) {
  // let child;
  // if _findChild is -1
    // create a new node for the child
    // assign the value to be the 1st character in word
  // else
    // set child to the indicatd node from the children array
  // if the length of word is 1
    // set child's end of word bool to true
  // else
    // call insert with word less the first character
};

/*
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {

};

/*
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

};

/*
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 // testing
 var obj = new Trie();
 var child = new Trie();
 child.value = 'a';
 obj.children.push(child);
console.log(obj);
console.log(obj._findChild('b'));

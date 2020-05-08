/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.



Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false


Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
*/

/*
O: a boolean, indicating if given values are at same level of binary tree with different parents
I: root node of a tree and two unique integers from 1 to 100
C: 2 to 100 total nodes in tree, values in nodes are unique integers 1 to 100
E: empty tree, one or both values do not exist in tree, both exist but have same parent or are at diff depth
Plan: use a breadth first search of tree
  utilize a queue to store all nodes at current depth
  use a second queue to store all child node of current depth nodes
  have a current depth
  have flags for finding x and y values, start both to be false
  start by putting root in queue with a depth of 0
  if either x or y is the value of the root, return false
  put both child nodes into the children queue
  check their values and set flags to true if found, but if both found under same parent, return false

  make children queue the current queue, set children queue to empty, and increase depth by 1
  go through each node in current queue
  put children into children queue
  check their values and set the flags to true - if both are under same parent, return false
  at the end of queue, if both flags are true, return true but if one is true, return false
  repeat until done with tree
  return false when done with tree - they weren't found

*/

var isCousins = function(root, x, y) {
  // currDepth = [];
  // children = [];
  // depth = 0;
  // xFound = false;
  // yFound = false;

  // if x or y is root
    // return false
  // currDepth.push(root);

  // while currDepth is not empty
    // loop through currDepth
      // if current.left.val is x or y and current.right.val is x or y
        // return false
      // if current.left.val = x or current.right.val = x
        // xFound = true
      // if current.left.val = y or current.right.val = y
        // yFound = true
      // children.push(current.left);
      // children.push(current.right);


  // return false
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
};



/*
        Search in a Binary Search Tree problem from leetcode: leetcode.com
searchInABinarySearchTree.js

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2
     / \
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

O: a tree node with val equal to the given val, or null if there is not a match
I: the root node of the binary search tree and a number val to search for in the tree
C: none given
E: root could be null
Plan:
if root is null, return null
check if the root's value matches the search value
if val is less than root val - recursively search the left side of tree
if val is greater than root val - recursivly search the right side of tree

if solution wasn't found, return null
*/

var searchBST = function(root, val) {
  let subtree;
  if (root === null) return null;
  if (root.val === val) return root;

  if (val < root.val) subtree = root.left
  else subtree = root.right;
  return searchBST(subtree, val);
};

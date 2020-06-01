/*
        Invert Binary Tree problem on leetcode: leetcode.com
invertBinaryTree.js


Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

@param {TreeNode} root
@return {TreeNode}

O: a binary tree, with the nodes values and heirarchy preserved, but mirrored
I: a binary tree
C: none given
E: tree could be empty; not necessarily a binary search tree
Plan:
recursively traverse the tree and swap the left and right children from the bottom to the top

so if the given tree node has children, go to the left child and invert it's children
then go the the right and invert it's children
then invert the children of the current node

*/

var invertTree = function(root) {
  // if root is null, return
  if (root === null) {
    return root;
  }

  const temp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = temp;

  return root;
};
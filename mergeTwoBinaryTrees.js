/*
              Merge Two Binary Trees problem from leetcode: leetcode.com

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

Example 1:
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7

Note: The merging process must start from the root nodes of both trees.

O: root of a merged binary tree; node are combination of nodes in same location of input tree
I: roots of two binary trees, value of nodes are integers
C: none given
E: one or both trees could be empty (null root), could match exactly, could be very uneven in different ways
Plan:
use recursive depth first traversal
need to operate on both trees at the same time
if hit a null with either child, just keep null for that tree instead of trying to access a child

if both inputs are null, return null
if first is null
  make a new node with value of second
  left children will be null and second's left child
  right children will be null and second's right
if second is null, return the first
  make new node with value of first node
  left children will first's left and null
  right children will be first's right and null
if neither is null
  make a new node using sum of both values
  left children will be both lefts
  right children will be both rights

new node.left will be the return of a recursive call using the lefts defined above
the right child is the result of the recursive call using the rights defined above
then return the new node

*/

var mergeTrees = function(t1, t2) {
  if (t1 === null && t2 === null) return null;

  if (t1 === null) return t2;
  if (t2 === null) return t1;

  const result = new TreeNode(t1.val + t2.val)
  result.left = mergeTrees(t1.left, t2.left);
  result.right = mergeTrees(t1.right, t2.right);

  return result;
};
/*
      Problem Kth Smallest Element in a BST from leetcode: leetcode.com
kthSmallestElementInBST.js

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

*/

/*
O: a number, the kth smallest number from given binary search tree
I: the root of a binary search tree and the target position k
C: none given
E: less than k elements in the BST overall
Plan:
traverse to the lowest left leaf in a depth first search and count up from there
start a count at 0
recursively traverse down and left
when a leaf has no children, start the count at 1
have every following node increment count by 1
once the count equals k, store that value
and try to shortcircuit the traversal

-alternately, could try to traverse the tree interatively to make breaking out sooner easier

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right)
}

var kthSmallest = function(root, k) {
  kthSmallestVal = null;
  count = 0;

  var depthTraverse = function(node) {
    if (node.left) {
      depthTraverse(node.left);
    }

    count += 1;
    if (count === k) {
      kthSmallestVal = node.val;
    }

    if ((node.right) && (count < k)) {
      depthTraverse(node.right);
    }
  }

  depthTraverse(root);
  return kthSmallestVal;
};

// testing
var node2 = new TreeNode(2, null, null);
var node1 = new TreeNode(1, null, node2);
var node4 = new TreeNode(4, null, null);
var node3 = new TreeNode(3, node1, node4);
console.log(kthSmallest(node3, 1));


var node1a = new TreeNode(1, null, null);
var node2a = new TreeNode(2, node1a, null);
var node4a = new TreeNode(4, null, null);
var node3a = new TreeNode(3, node2a, node4a);
var node6a = new TreeNode(6, null, null);
var node5a = new TreeNode(5, node3a, node6a);
console.log(kthSmallest(node5a, 3));

var node2b = new TreeNode(2, null, null);
var node1b = new TreeNode(1, null, node2b);
console.log(kthSmallest(node1b, 2));

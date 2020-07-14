/*
              Same Tree problem from leecode: leetcode.com

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

O: a boolean, indicating if the trees are identical or not
I: the roots of two binary trees
C: none given
E: one or both roots could be null, trees
Plan:
Traverse the trees simultaneously, if any node or value does not match, they aren't the same!
Recursively do depth first traversal
compare the current node values
compare the left children recursively
compare right children recursively
*/

var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  if (!isSameTree(p.left, q.left)) return false;
  if (!isSameTree(p.right, q.right)) return false;
  return true;
};
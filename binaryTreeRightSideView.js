/*
      Binary Tree Right Side View problem from leetcode: leetcode.com

O: an array, the values of the right most elements from the given binary tree in order from top to bottom
I: the root node of a bnary tree
C: no time or space constraints given
E: root may be null, tree may be only a linked list, have lots of zigzigs,
   may have larger depth on the left side of the tree
Plan:
use a depth first search
we will go left side bfs
we store one value for each depth in an array, so the index can be the depth
as we encounter new values at a depth that already exists, we replace the current element at that depth
(note that we could go right side start, but the deepest leaf may be along a left child only path and need to be inclluded, so we still have to check all nodes)

use an internal dfs helper function to recursively traverse the binary tree
needs to also track the current depth so we know whether to add or replace an element

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

var rightSideView = function(root) {
  const results = [];

  if (root === null) return results;

  const dfs = (node, depth) => {
    if (node === null) return;

    if (results.length <= depth) results.push(node.val)
    else results[depth] = node.val;
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return results;
};


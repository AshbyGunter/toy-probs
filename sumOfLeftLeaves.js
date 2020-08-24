/*
        Sum of Left Leaves problem from leetcode: leetcode.com

O: a number, the sum of the left side leaves in the given tree
I: the root of a binary tree whose values are numbers
C: no time or space constraints specified
E: root could be null
   all leaves could be right side, leaving nothing to sum
   tree could have only the root - which could be interpreted as no left side leaves or to return value of root

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

Plan:
traverse the tree, identify left side leaves, and gather those values to sum
recursive dfs option:
get sum from the left child of given node:
if left child exists
  if it is a leaf, get its value
  if not, recursive call on left child

get sum for the right child of given node with recursive call to right child
add the two together and return result

*/

var sumOfLeftLeaves = function(root) {
  if (root === null) return 0;

  // depth first recursive solution:
  let leftSum = 0;
  const leftChild = root.left;
  if (leftChild !== null) {   // left child exits
    if (leftChild.left === null && leftChild.right === null) {    // left child is a leaf
      leftSum = leftChild.val;
    } else {    // left child has children
      leftSum = sumOfLeftLeaves(leftChild);
    }
  }
  const rightSum = sumOfLeftLeaves(root.right);
  return leftSum + rightSum;
};
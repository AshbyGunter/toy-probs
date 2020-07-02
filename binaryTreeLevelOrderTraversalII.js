/*
              Binary Tree Level Order Traversal II problem from leetcode: leetcode.com

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

O: an array of arrays of tree node values, arrays in bottom to top order, with each of those arranged left to right
I: the head of a binary tree
C: none given
E: head could be null, tree is not necessarily balanced
Plan:
a bfs traversal makes sense
build each depth level out as one array and store them, then reverse the order of the depths for the return array

start by testing for null at head, return empty array

put head value in array
push that array into a topDown array
set a last depth of 0
start a current depth list
go through the topDown array at lastDepth, which right now will just be the head
if the left child is not null, add it to current depth list
repeat for right child
once done with everything in current depth array
add current depth list to the topDown array - if it's not empty!! (it will be for last level)
increment last depth

once that loop is done, we hace an array that has a list for each depth in left to right order
but the order of that list in top to bottom
to reverse, we pop off the items in that array and add them to a different array
then return that array, now in correct order

*/

var levelOrderBottom = function(root) {
  if (root === null) return [];

  const results = [];
  const topDown = [[root]];

  // build a queue of sorts with each level of the tree in a new array
  for (var lastDepth = 0; lastDepth < topDown.length; lastDepth += 1) {
    const lastDepthNodes = topDown[lastDepth];
    const currentDepthNodes = [];
    for (let i = 0; i < lastDepthNodes.length; i += 1) {
      if (lastDepthNodes[i].left !== null) currentDepthNodes.push(lastDepthNodes[i].left);
      if (lastDepthNodes[i].right !== null) currentDepthNodes.push(lastDepthNodes[i].right);
    }
    if (currentDepthNodes.length > 0) topDown.push(currentDepthNodes);
  }

  // go through the levels backwards to store the values in results array
  for (let depth = topDown.length - 1; depth >= 0; depth -= 1) {
    const values = [];
    for (let i = 0; i < topDown[depth].length; i += 1) {
      values.push(topDown[depth][i].val);
    }
    results.push(values);
  }

  return results;
};

// testing
function assertEqual(expected, result, test) {
  if (JSON.stringify(expected) === JSON.stringify(result)) console.log `passed ${test}`
  else console.log(`FAILED ${test}: expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
}

// testing
let tree = new TreeNode(3);
let nine = new TreeNode(9);
let twenty = new TreeNode(20);
let fifteen = new TreeNode(15);
let seven = new TreeNode(7);
twenty.left = fifteen;
twenty.right = seven;
tree.left = nine;
tree.right = twenty;

let expected = [[15,7],[9,20],[3]];
let result = levelOrderBottom(tree);
assertEqual(expected, result, 'correctly orders values in tree');
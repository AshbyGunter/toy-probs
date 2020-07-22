/*
          Binary Tree Zigzag Level Order Traversal problem from leetcode: leetcode.com

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

O: an array, containing the values of the nodes in the given tree, each depth is an array and the order of the values from each depth alternates between left to right and right to left
I: the root of a binary tree
C: none given
E: the root could be null, the tree could be just a linked list, each depth could be partially full or complete
Plan:
this calls for a bredth first traversal of the tree
use a queue to store all nodes in a given depth
use that queue to build another queue with the next depth level of the binary tree
while going through to build the next level, assemble an array of the values of the nodes
counting root level as 0 and even, if the depth of a level is odd, reverse the array of values for that depth
then add the array of values to the overalll results
*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var zigzagLevelOrder = function(root) {
  // for storing results, starts as an empty array
  const results = [];
  // short circuit out if root is null
  if (root === null) return results;

  // currDepthNodes is queue (array) of nodes with only root as an element
  let currDepthNodes = [root];
  // nextDepthNodes is an empty array for the next level's nodes
  let nextDepthNodes = [];
  // depth is the depth of currDepthNodes, starts at 0
  let depth = 0;

  // loop while currDepthNodes has a length greater than 0
  while (currDepthNodes.length > 0) {
    // values, an empty array for this level's node values
    let values = [];
    for (let i = 0; i < currDepthNodes.length; i += 1) {
      // push value of current node to values
      values.push(currDepthNodes[i].val);
      if (currDepthNodes[i].left !== null) nextDepthNodes.push(currDepthNodes[i].left);
      if (currDepthNodes[i].right !== null) nextDepthNodes.push(currDepthNodes[i].right);
    }
    // if the depth is odd, reverse values
    if (depth % 2 === 1) values = values.reverse();
    results.push(values);
    currDepthNodes = nextDepthNodes;
    nextDepthNodes = [];
    depth += 1;
  }
  return results;
};

// testing
let root;
let node;
let expected;
let result;

root = null;
expected = [];
result = zigzagLevelOrder(root);
console.assert((Array.isArray(result) && result.length === 0), 'Testing null root | expected "%s", but got "%s"', JSON.stringify(expected), JSON.stringify(result));

root = new TreeNode(1);
expected = JSON.stringify([[1]]);
result = JSON.stringify(zigzagLevelOrder(root));
console.assert(expected === result, 'Testing valid root, no children | expected "%s", but got "%s"', expected, result);

root = new TreeNode(3);
node = new TreeNode(9);
root.left = node;
node = new TreeNode(20);
root.right = node;
node = new TreeNode(15);
root.right.left = node;
node = new TreeNode(7);
root.right.right = node;
expected = JSON.stringify([[3],[20,9],[15,7]]);
result = JSON.stringify(zigzagLevelOrder(root));
console.assert(expected === result, 'Testing valid root, no children | expected "%s", but got "%s"', expected, result);

console.log('Testing Done!');
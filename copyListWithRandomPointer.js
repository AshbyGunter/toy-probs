/*
        138. Copy List with Random Pointer from leet code: https://leetcode.com/problems/copy-list-with-random-pointer/

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.


Example 1:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

Example 4:
Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.

Constraints:

-10000 <= Node.val <= 10000
Node.random is null or pointing to a node in the linked list.
Number of Nodes will not exceed 1000.

Definition for a Node.
function Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

@param {Node} head
@return {Node}

O: the head of a deep copy of the given linked list
I: the head of a linked list whose nodes also contain a link to a random node or null
C: int value carried by nodes is from -10000 to 10000, all randoms point to valid nodes or null, up to 1000 nodes
E: head could be null
Plan:
run through the list and moke copies of all nodes with the value from original node
store the new node with the original in a map, original node: copy
run through the list again
copy the next and random nodes based on lookups using the Map
*/

var copyRandomList = function(head) {
  const copies = new Map();
  let traversal = head;
  copies.set(null, null);

  while (traversal !== null) {
    let copy = new Node(traversal.val, null, null);
    copies.set(traversal, copy);
    traversal = traversal.next;
  }

  traversal = head;
  while (traversal !== null) {
    let copy = copies.get(traversal);
    copy.next = copies.get(traversal.next);
    copy.random = copies.get(traversal.random);
    traversal = traversal.next;
  }


  return copies.get(head);
};

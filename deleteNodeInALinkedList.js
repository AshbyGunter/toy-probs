/*
            Delete Node in a Linked List from leetcode: leetcode.com
deleteNodeInALinkedList.js

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

Note:
The linked list will have at least two elements.
All of the nodes' values will be unique.
The given node will not be the tail and it will always be a valid node of the linked list.
Do not return anything from your function.

Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

@param {ListNode} node
@return {void} Do not return anything, modify node in-place instead.

O:  none, but linked list will have given node deleted
I:  a node, to be deleted from linked list
C:  none given, should be able to do this in O(1) time ans O(1) space
E:  list will have at least two elements, all values are unique, the node to be deleted will be valid and not the tail
Plan:
we can not access the pointer the the given node; we do not have the node or any of the previous nodes
we can not just rearrange pointers to remove the node
we can move the values of the nodes
so we move the value up from the next node to the current
and then skip around that node
*/

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

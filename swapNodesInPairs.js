/*
          Swap Nodes in Pairs problem from leetcode: https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1681/
swapNodesInPairs.js

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:
Given 1->2->3->4, you should return the list as 2->1->4->3.

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

@param {ListNode} head
@return {ListNode}

O: a list node, the head of the linked list
I: a list node, the head of the given linked list
C: none given
E: given node could be null, or could have only one node, might be an odd number of nodes
Plan:
supposed to be recursive solution!!
if head is null, do nothing and return
if head.next is null, do nothing and return
otherwise
set head.next.next to the return of:
recursively call using 2 nodes from the head, so head.next.next, if that exists
store nextNode pointer to head.next
point head.next at nextNode.next
point nextNode.next to head
return nextNode as the head

*/

var swapPairs = function(head) {
  let nextNode;

  if ((head === null) || (head.next === null)) {
    return head;
  }

  nextNode = head.next;
  head.next = swapPairs(head.next.next);
  nextNode.next = head;
  head = nextNode;
  return head;
};
/*
oddEvenLinkedList
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
/*
O: a node, the head of the linked list with odd nodes grouped first, but in the same order as given list, and even following in the same mannger
I: a node, the head of the linked list to transform
C: O(1) space
E: the head is null,
    there is only 1 node in the list
Plan:
deal with the edge cases first - if null is passed in, return null; and if the node has no next, just return it
the head will always be the head, as it's the 1st odd node
need to keep track of the last odd node and the last even node, also the 1st even node
assign the 1st node to be the last odd node and the next to be the last even node
now starting from the 3rd node,
it is odd, so
point the last odd node's next to it
set last odd node to it
now we go it's next
it is even, so
point the last even node's next to it
set the last even node to it

once done with the loop
set the last odd's next to be the head of the even list
set the last even's next to be null
*/
var oddEvenList = function(head) {
  // firstEven
  // lastOdd
  // lastEven
  // next
  // isOdd

  // if head is null
    // return null
  // if head.next is not null
    // isOdd = true
    // lastOdd = head
    // first even = head.next
    // lastEven = head.next
    // next = lastEven.next
    // while next is not null
      // if isOdd
        // lastOdd.next = next
        // lastOdd = next
      // else
        // lastEven.next = next
        // lastEven = next

  // return head
};
/*
            Remove Linked List Elements problem from leetcode: leetcode.com

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

O: a node, the head of the modified linked list
I: a node, the head of a linked list and a value to be removed from the linked list
C: none given
E: linked list could be empty, it could have no nodes with the given val, all nodes could have the given val, the first (several) could have val
    the list could be very small or very large
Plan:
if the node passed in is null, then the result will be null, so check that right off
for removing a value from a llinked list, we need to keep track of the element that comes before the one we are examining
so we could either use one pointer and always look ahead; or we could use two pointer to track current and previous
traverse the linked list, so loop while the current node is not null
if the current node does not match the given val, we move on and update current to the next pointer and previous to the node we just left
if the node has a matching value
- if it's the head of the list, then we can set the new head to be the next node
- if it is not the head, we leave previous where it is, set that node's next to the current's next, and update current to that node

*/

var removeElements = function(head, val) {
  if (head === null) return head;

  const prehead = new ListNode(0, head);
  let previous = prehead;
  let current = head;
  while (current !== null) {
    if (current.val === val) previous.next = current.next
    else previous = current;
    current = current.next;
  }
  return prehead.next;


  // Accepted, functioning verion:  Let's try to get it cleaner
  // if (head === null) return head;

  // let current = head;
  // let previous = null;

  // while (current !== null) {
  //   if (current.val === val) {          // current node contains given val
  //     if (previous !== null) {          // current is not the head of the linked list
  //       current = current.next;
  //     } else {                          // previous is null and current is the head of the list
  //       head = current;
  //     }
  //   } else {                            // current node does not contain given val
  //     previous = current;
  //   }
  //   current = current.next;
  // }
  // return head;
};
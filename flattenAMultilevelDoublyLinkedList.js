/*
        Flatten a Multilevel Doubly Linked List problem from leetcode: leetcode.com

O: a node, the head of the flattened list
I: a node, the head of a doubly linked list
C: none given
E: head could be null, list could be one node with only a child list, could be a list that is already flat
Plan:
recursive:
start at head
recursively flatten all children
insert that list after head, then move to the node after the head
return the head

steps:
if head is null, return null
get tail of children list (recursive call)
insert children list between head and next node
recursive call with node that had been right after head
return the last node before null

in main body
call the recursive function with the head
then return the head

Non-recursive:
use a stack
start with head
while there are nodes in the stack, loop
pop the top node
add it's next to the stack
add it's child to the stack
connect it to the previous node
and set the previous to be the one we were just using



*/

var flatten = function(head) {
  if (head === null) return null;

  const nodes = [head];
  let curr = null;
  let prev = null;

  while (nodes.length > 0) {
    curr = nodes.pop();
    if (curr.next !== null) nodes.push(curr.next);
    if (curr.child !== null) nodes.push(curr.child);

    curr.prev = prev;
    if (prev !== null) prev.next = curr;
    curr.child = null;
    prev = curr;
  }

  return head;


  // recursive solution was not liked - stack overflow issue for leetcode
  // const integrateChildLists = node => {
  //   let result;

  //   if (node === null) return null;
  //   const next = head.next;
  //   let tail = null;
  //   if (node.child !== null) tail = integrateChildLists(node.child);
  //   if (tail !== null) {
  //     tail.next = next
  //     if (next !== null) next.prev = tail;
  //     head.next = head.child;
  //     head.next.prev = head;
  //   }
  //   node.child = null;
  //   // if next is not null, result = recurse on next
  //   if (next !== null) result = integrateChildLists(next)
  //   else result = node;
  //   return result;
  // }

  // integrateChildLists(head);
  // return head;
};
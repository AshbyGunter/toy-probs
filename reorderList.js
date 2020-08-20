/*
      Reorder List problem from leetcode: leetcode.com

O: the head of a linked list, containing the nodes from the given list, but with the order rearranged
   Given a singly linked list L: L0→L1→…→Ln-1→Ln,
   reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
I: the head of a linked list
C: no time or space constraints given
E: may  be only one or two nodes in list, needing no change
   may be no list, ie given head is null
Plan:
run through the list once and store each node in an array
then run through the list again alternating between the 1st unused node and the last unused node, rearranging the pointers
need to be careful on ending conditions, depending on how we implement the pointers
could do a first and last, but don't want to do two changes per loop cycle in case the first of those is tha last change for the list
the last node in the new list will be the middle ceiling
1 - 2 - 3 - 4 - 5 becomes 1 - 5 - 2 - 3 - 4
1 - 2 - 3 - 4 becomes 1 - 4 - 2 - 3

*/

var reorderList = function(head) {
  if (head === null || head.next === null || head.next.next === null) return head;
  const nodes = [];

  // loop through the nodes, pushing them into the array in order
  for(let node = head; node !== null; node = node.next) nodes.push(node);

  // set curr to front & next to rear
  let curr = 0;
  let next = nodes.length - 1;
  let nextNext;
  let last = Math.ceil(next / 2);
  while (curr !== last) {
    nodes[curr].next = nodes[next];
    if (curr < next) nextNext = curr + 1
    else nextNext = curr - 1;
    curr = next;
    next = nextNext;
  }
  nodes[curr].next = null;

  return head;
};

// testing
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let head;
let node;

// craft test list
node = new ListNode(5);
node = new ListNode(4, node);
node = new ListNode(3, node);
node = new ListNode(2, node);
head = new ListNode(1, node);
console.log(head);

let test;
let expect;
let result;

result = reorderList(head);
for (let node = head; node !== null; node = node.next) console.log(node);
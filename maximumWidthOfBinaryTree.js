/*
          Maximum Width of Binary Tree problem from leetcode: leetcode.com

O: an integer, the maximum width of a given binary tree, counting null nodes in between existing ones
I: the root of a binary tree
C: none given
E: root could be empty
    need to be very careful addressing and counting nulls
    a branch that extends to a further depth by itself will only give it's level a width of 1
    there could be great seperation between between non-null nodes at the same depth, and all of those nulls need to be counted
Plan:
keep track of max width of all depths examined
do a breadth first traversal using a queue
contrary to normal traversal, we need to put each null child into the queue for the next level
for each null node found in the queue for a depth, need to put two nulls into the queue for the next depth
let's use different queues for each depth
after going through one queue to assemble the next level, assess where the 1st non-null node is from both the front and back
count that length and compare to max width, keep the larger value
if that count is 0, then we are done with the traversal
-- could shortcut this by using some kind of flag on the depth being traversed

after the traversal is done, return max width
*/

var widthOfBinaryTree = function(root) {
  if (root === null) return 0;

  let maxWidth = 1;
  let curr = [root];
  let next;

  // takes a level of the binary tree and returns the next level of the tree
  const assembleNext = level => {
    const next = [];
    // loop through level
    for (let i = 0; i < level.length; i += 1) {
      // if current is null, push two nulls into next
      if (level[i] === null) {
        next.push(null);
        next.push(null);

      // else push both children of current into next
      } else {
        next.push(level[i].left);
        next.push(level[i].right);
      }
    }
    return next;
  }

  // takes a level of the binary tree and removes all leading and trailing nulls
  const trimNulls = level => {
    let start = 0;
    let end = level.length - 1

    // loop forward until start points to a non-null element- > iterate start
    while (level[start] === null) start += 1;
    // loop from the rear until end points to a non-null element -> decrement end
    while (level[end] === null) end -= 1;

    // return level sliced from start to end + 1
    return level.slice(start, end + 1);
  }

  while (curr.length > 0) {
    next = assembleNext(curr);
    next = trimNulls(next);
    maxWidth = Math.max(maxWidth, next.length);
    curr = next;
  }

  return maxWidth;
};
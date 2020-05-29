/*
        Filling Bookcase Shelves problem from leetcode: https://leetcode.com/problems/filling-bookcase-shelves/
fillingBookcaseShelves.js


We have a sequence of books: the i-th book has thickness books[i][0] and height books[i][1].

We want to place these books in order onto bookcase shelves that have total width shelf_width.

We choose some of the books to place on this shelf (such that the sum of their thickness is <= shelf_width), then build another level of shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down.  We repeat this process until there are no more books to place.

Note again that at each step of the above process, the order of the books we place is the same order as the given sequence of books.  For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.

Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelf_width = 4
Output: 6
Explanation:
The sum of the heights of the 3 shelves are 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.


Constraints:

1 <= books.length <= 1000
1 <= books[i][0] <= shelf_width <= 1000
1 <= books[i][1] <= 1000

@param {number[][]} books
@param {number} shelf_width
@return {number}

O: a number, the total height of the bookcase needed to shelve the books in given order
I:  an array of tuples where the 1st element is the thickness of the book and the 2nd is the height
    a number, the width of the shelves
C: number of books is from 1 to 1000, the shelf width is equal to or greater than any book, up through 1000
    and the height of a book is from 1 through 1000
E: could be 1 book total, or only 1 per shelf
Plan:
store bookcase height, start at 0
current shelf height
current shelf width


go through list of books

if it fits in shelf width
- add it's width to current width
- set current shelf heigh to larger of current max or current book's height
if it doesn't fit
- add current height to bookcase height
- set current width to shelf_width - current book width

after looping, add last current height to bookcase
return bookcase height



BUT - problem in my interpretation is that we can skip to the next shelf if it's beneficial

SO
if current book does not fit on shelf --> start new shelf and add the book to it
if it's the first book for the shelf --> add it to the shelf

books: 1/1, 1/2, 1/2  & width of 2
current algo would go
1/1 & 1/2 for height of 2, next shelf 1/2 for height of 2, total 4
when min would be 1/1 for height of 1 & 1/2 & 1/2 for height of 2 with a total of 3




*/

var minHeightShelves = function(books, shelf_width) {
  let bookcaseHeight = 0;
  let currHeight = 0;
  let currWidth = 0;
  let book;

  for (let i = 0; i < books.length; i += 1) {
    book = books[i];
    if (currWidth + book[0] <= shelf_width) {
      currWidth += book[0];
      currHeight = Math.max(currHeight, book[1]);
    } else {
      bookcaseHeight += currHeight;
      currWidth = book[0];
      currHeight = book[1];
    }
  }
  bookcaseHeight += currHeight;

  return bookcaseHeight;
};

// testing
var books1 = [[1, 1]];
var width1 = 1;
result1 = minHeightShelves(books1, width1);
console.log(result1);  // 1

var books2 = [[1,1], [1,1]];
var width2 = 1;
result2 = minHeightShelves(books2, width2);
console.log(result2);  // 2

var books3 = [[1,1], [1,1], [1,1]];
var width3 = 1;
result3 = minHeightShelves(books3, width3);
console.log(result3);  // 3

var books4 = [[1,1], [1,1]];
var width4 = 2;
result4 = minHeightShelves(books4, width4);
console.log(result4);  // 1

var books5 = [[1,1], [1,2]];
var width5 = 1;
result5 = minHeightShelves(books5, width5);
console.log(result5);  // 3

var books6 = [[2,1], [2, 1]]
var width6 = 2;
result6 = minHeightShelves(books6, width6);
console.log(result6);  // 2

var books7 = [[2,2], [2,2], [2,2]];
var width7 = 3;
result7 = minHeightShelves(books7, width7);
console.log(result7);  // 6

var books8 = [[1,1],[1,2],[1,3],[1,1],[1,1]];
var width8 = 4;
result8 = minHeightShelves(books8, width8);
console.log(result8);  // 4

var books9 = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]];
var width9 = 4;
result9 = minHeightShelves(books9, width9);
console.log(result9);  // 6



/*
        Online Stock Span problem from leetcode: leetcode.com
onlineStockSpan

Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].



Example 1:

Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
Output: [null,1,1,1,2,1,4,6]
Explanation:
First, S = StockSpanner() is initialized.  Then:
S.next(100) is called and returns 1,
S.next(80) is called and returns 1,
S.next(60) is called and returns 1,
S.next(70) is called and returns 2,
S.next(60) is called and returns 1,
S.next(75) is called and returns 4,
S.next(85) is called and returns 6.

Note that (for example) S.next(75) returned 4, because the last 4 prices
(including today's price of 75) were less than or equal to today's price.


Note:

Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
There will be at most 10000 calls to StockSpanner.next per test case.
There will be at most 150000 calls to StockSpanner.next across all test cases.
The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.

*/


var StockSpanner = function() {
  this.prices = [];
  this.spans = [];
};

/*
 * @param {number} price
 * @return {number}
 */
/*
O: an integer, the number of consecutive days (including current) leading up to current
    that the price is given price or less; also stores the new price in a stack
I: a new day's price
C: some time constraint, so optimize there somewhat; no space constraints
E: prices are valid and from 1 to 10^5;
Plan:
start with a span of 1 since every new price will at least have that
check new price against the previous price
if the new price is lower, add the price to the prices stack and a span of 1 to the spans stack & return 1
otherwise
while the new price is higher than the top of the stack price, pop the top of tha price stack
  and pop the top of the spans stack and add it to the stack number
after the loop, add the new price and span numbers to their respective stacks

*/
StockSpanner.prototype.next = function(price) {
  let span = 1;

  while (price >= this.prices[this.prices.length - 1]) {
    this.prices.pop();
    span += this.spans.pop();
  }
  this.prices.push(price);
  this.spans.push(span);

  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var obj = new StockSpanner()
console.log(obj.next(4));
console.log(obj.next(4));
console.log(obj.next(5));
console.log(obj.next(2));
console.log(obj.next(1));

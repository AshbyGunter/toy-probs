/*
          Validate IP Address problem from leetcode: leetcode.com
validateIPAddresses.js

Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.

IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;

Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.

Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 is invalid.

Note: You may assume there is no extra space or special characters in the input string.

Example 1:
Input: "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".

Example 2:
Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".

Example 3:
Input: "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.

O: a string, 'IPv4', 'IPv6', or 'Neither' indicating if given string is a valid IP address
I: a string, containing no extra space or special characters
C: none given
E: string could be empty, may not contain enough digits, or could have too many
Plan:
length of IPv4 is max 15 characters - 123.456.789.123 and min 7 characters 1.1.1.1
for IPv6 max is 39 and min would be 15

so first off, anything more than 39 and less then 7 is invalid
use two different functions
length of 16 through 39, test IPv6
length of 7 through 14, test IPv4
if length is 15, check for a colon and filter to 6 or 4

for IPv6:
needs to have 8 segments seperated by 7 colons of 1 to 4 digits that are valid hexadecimal, with letters upper or lower case
loop through the segments it should have (8 of them)
grab the segment up until the next colon, or the end of the string
test the segment
needs to be 1 to 4 digits
each digit must be a numeral or a through f, upper or lower /valid hexadecimal numbers
if any segment fails, return false
if loop does not go through 8 segments, return false

for IPv4:
needs to have four segments seperated by a total of three dots
segments are from 0 to 255, so length is from 1 to 3
loop through the segments it should have
each segment should resolve to a number from 0 to 255, otherwise return false
if the number of segments is not exactly 4, return false

*/

const testIPv6 = (IP) => {
  const segments = IP.split(':');
  if (segments.length !== 8) return false;
  for (let i = 0; i < 8; i += 1) {
    if ((segments[i].length > 4) || (segments[i].length < 1)) return false;
    for (let j = 0; j < segments[i].length; j += 1) {
      if (isNaN(parseInt(segments[i][j],16))) return false
    }
  }
  return true;
}

const testIPv4 = (IP) => {
  const segments = IP.split('.');
  if (segments.length !== 4) return false;
  for (let i = 0; i < 4; i += 1) {
    if (segments[i].length < 1 || segments[i].length > 3) return false;
    if (segments[i][0] === '0' && segments[i].length > 1) return false;
    for (let j = 0; j < segments[i].length; j += 1) {
      if (isNaN(parseInt(segments[i][j],10))) return false;
    }
    segment = parseInt(segments[i], 10);
    if (segment < 0 || segment > 255) return false
  }

  return true;
}

var validIPAddress = function(IP) {
  let isIPv4 = false;
  let isIPv6 = false;
  const lengthIP = IP.length;

  if ((lengthIP >= 16) && (lengthIP <= 39)) isIPv6 = testIPv6(IP)
  else if ((lengthIP >= 7) && (lengthIP <= 14)) isIPv4 = testIPv4(IP)
  else if (lengthIP === 15) {
    if (IP.indexOf(':') > -1) isIPv6 = testIPv6(IP)
    else isIPv4 = testIPv4(IP);
  }

  if (isIPv6) return 'IPv6';
  if (isIPv4) return 'IPv4';
  return 'Neither';
};

// testing
var empty = '';
var emptyResult = validIPAddress(empty);
console.log(emptyResult);

var tooShort = '111111';
var resultTooShort = validIPAddress(tooShort);
console.log(resultTooShort);

var tooLong = '1234567890123456789012345678901234567890'
var resultTooLong = validIPAddress(tooLong);
console.log(resultTooLong);

var tooFewSegmentsIPv61 = '1234:1234:1234:1234'
var resultTooFewSegmentsIPv6 = validIPAddress(tooFewSegmentsIPv61);
console.log(resultTooFewSegmentsIPv6);

var tooFewSegmentsIPv62 = '1234:1234:1234:1234:1234:1234:1234'
var resultTooFewSegmentsIPv6 = validIPAddress(tooFewSegmentsIPv62);
console.log(resultTooFewSegmentsIPv6);

var doubleColon = '1234:2345:3456:4567:5678:6789::7890';
var resultDoubleColon = validIPAddress(doubleColon);
console.log(resultDoubleColon);

var invalidHex = '1234:2345:3456:4567:5678:6789:7890:890h';
var resultInvalidHex = validIPAddress(invalidHex);
console.log(resultInvalidHex);

var validIPv6 = '1234:0:3456:AbCd:0000:6Ef9:7890:890A';
var resultValidIPv6 = validIPAddress(validIPv6);
console.log(`this one should be IPv6: ${resultValidIPv6}`);

var size15IPv6 = '1:2:3:4:5:6:7:8';
var resultSize15IPv6 = validIPAddress(size15IPv6);
console.log(`this one should be IPv6: ${resultSize15IPv6}`);

var tooFewSegmentsIPv41 = '111.222'
var resultTooFewSegmentsIPv41 = validIPAddress(tooFewSegmentsIPv41);
console.log(resultTooFewSegmentsIPv41);

var tooFewSegmentsIPv42 = '111.222.333'
var resultTooFewSegmentsIPv42 = validIPAddress(tooFewSegmentsIPv42);
console.log(resultTooFewSegmentsIPv42);

var doubleDot = '111.222.33..444';
var resultDoubleDot = validIPAddress(doubleDot);
console.log(resultDoubleDot);

var invalidDecimal = '111.222.333.44a';
var resultInvalidDecimal = validIPAddress(invalidDecimal);
console.log(resultInvalidDecimal);

var segmentTooLongV4 = '111.2.3.0122';
var resultSegmentTooLongV4 = validIPAddress(segmentTooLongV4);
console.log(resultSegmentTooLongV4);

var outOfRange = '111.222.111.444';
var resultOutOfRange = validIPAddress(outOfRange);
console.log(resultOutOfRange);

var validIPv4min = '1.2.3.4';
var resultValidIPv4min = validIPAddress(validIPv4min);
console.log(`should be IPv4: ${resultValidIPv4min}`);

var validIPv4Size15 = '111.222.111.222';
var resultValidIPv4Size15 = validIPAddress(validIPv4Size15);
console.log(`should be IPv4: ${resultValidIPv4Size15}`);
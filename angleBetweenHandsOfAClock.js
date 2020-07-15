/*
        Angle Between Hands of a Clock problem from leetcode: leetcode.com

O: a number, the smaller angle formed between the hands of a clock
I: two integers, the hours and minutes readings on the clockl
C: none given
E: every hour the hands will meet and the angle will be 0,
    the largest angle that can be returned is 180, half of 360
Plan:
Important info:
minute hand:
  60 min = 360 degrees, so 1 min = 6 degrees
hour hand:
  12 hrs = 360 degrees, so 1 hr is 30 degrees
  1 hr = 30 degrees so 1 min = 1/2 or .5 degree

so calculate the angle of the minutes hand based on the minutes
easily enough, just multiply minutes by 6
for hour hand, multiply number of hours by 30, multiply minutes by .5, and add both together

now with both numbers, subtract the larger from the smaller
if they are within 180 degrees of each other, the absolute value of the difference is the answer
if they are futher than 180 degrees apart, we need to add 360 - the larger value to the smaller vallue and add them together

*/

var angleClock = function(hour, minutes) {
  const MINUTE_HAND_DEGREES_PER_MINUTE = 6;
  const HOUR_HAND_DEGREES_PER_HOUR = 30;
  const HOUR_HAND_DEGREES_PER_MINUTE = .5;

  if (hour === 12) hour = 0;
  const minuteHandPosition = minutes * MINUTE_HAND_DEGREES_PER_MINUTE;
  const hourHandPosition = hour * HOUR_HAND_DEGREES_PER_HOUR + minutes * HOUR_HAND_DEGREES_PER_MINUTE;

  let angle = Math.abs(minuteHandPosition - hourHandPosition);
  if (angle > 180) {
    const larger = Math.max(minuteHandPosition, hourHandPosition);
    const smaller = Math.min(minuteHandPosition, hourHandPosition);
    angle = 360 - larger + smaller;
  }
  return angle;
};

// tests
let testHour;
let testMinutes;
let result;

testHour = 12;
testMinutes = 30;
result = angleClock(testHour, testMinutes);
console.log(result, 'should be 165');

testHour = 3;
testMinutes = 30;
result = angleClock(testHour, testMinutes);
console.log(result, 'should be 75');

testHour = 3;
testMinutes = 15;
result = angleClock(testHour, testMinutes);
console.log(result, 'should be 7.5');

testHour = 4;
testMinutes = 50;
result = angleClock(testHour, testMinutes);
console.log(result, 'should be 155');

testHour = 12;
testMinutes = 0;
result = angleClock(testHour, testMinutes);
console.log(result, 'should be 0');

testHour = 1;
testMinutes = 57;
result = angleClock(testHour, testMinutes);
console.log(result, 'should be 76.5');

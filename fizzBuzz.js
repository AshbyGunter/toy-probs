/*


O: an array of strings, the representation of alll numbers from 1 through the given n, except multiples of three become "Fizz"
   and multiples of 5 become "Buzz", if both, then becomes "FizzBuzz"
I: an integer n,  assuming that n is greater than 0
C: no time or space constraints given
E: nothing interesting; n could be large, could be only 1
Plan:
iterate from 1 to n
for each number,
if divisible by 15, put FizzBuzz in a string
if divisible 3 -> Fizz
by 5 -> Buzz
otherwise convert number to string

Bigger Plan:
Write variants and run time trials on said variants to see what processes may take more time, or perhaps if there seems to be a combination of processes that functions faster than others.
Naming Conventions: (add tags to the name to signify differences)
Const -> use const declarations to define non-number strings, otherwise assign string literals
Template -> use string templating wherever possible
Reuse -> a string variable declared to put numbers into for all non-Push variants
         with this tag, it is declared outside the loop, without its created inside the loop
Push -> strings are created inside the function pushing the result into results array
Coerce -> use '' + num instead of using num.toString()
Basic -> doesn't use any of the other tags; no constants, no templating, uses num.toString,
         and has the string variable declared inside the loop

Results of Time Trials as they appear here, run with only VSCode and Chrome still active:
81.1 milliseconds average for fizzBuzzConstTemplateReuse
94.14 milliseconds average for fizzBuzzConstTemplate
174.64 milliseconds average for fizzBuzzConstReuse
166.02 milliseconds average for fizzBuzzConst
93.06 milliseconds average for fizzBuzzConstTemplatePush
169.54 milliseconds average for fizzBuzzConstPush
166.88 milliseconds average for fizzBuzzReuse
166.76 milliseconds average for fizzBuzzBasic
162.9 milliseconds average for fizzBuzzPush
95.78 milliseconds average for fizzBuzzConstTemplateReuseCoerce

*/

var fizzBuzzConstTemplateReuse = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  let converted;
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) converted = `${FIZZ}${BUZZ}`
    else if (i % 5 === 0) converted = `${BUZZ}`
    else if (i % 3 === 0) converted = `${FIZZ}`
    else converted = `${i}`;
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstTemplate = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let converted;
    if (i % 15 === 0) converted = `${FIZZ}${BUZZ}`
    else if (i % 5 === 0) converted = `${BUZZ}`
    else if (i % 3 === 0) converted = `${FIZZ}`
    else converted = `${i}`;
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstReuse = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  let converted;
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) converted = FIZZ + BUZZ
    else if (i % 5 === 0) converted = BUZZ
    else if (i % 3 === 0) converted = FIZZ
    else converted = i.toString();
    results.push(converted);
  }
  return results;
};

var fizzBuzzConst = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let converted;
    if (i % 15 === 0) converted = FIZZ + BUZZ
    else if (i % 5 === 0) converted = BUZZ
    else if (i % 3 === 0) converted = FIZZ
    else converted = i.toString();
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstTemplatePush = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) results.push(`${FIZZ}${BUZZ}`)
    else if (i % 5 === 0) results.push(`${BUZZ}`)
    else if (i % 3 === 0) results.push(`${FIZZ}`)
    else results.push(`${i}`);
  }
  return results;
};

var fizzBuzzConstPush = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) results.push(FIZZ + BUZZ)
    else if (i % 5 === 0) results.push(BUZZ)
    else if (i % 3 === 0) results.push(FIZZ)
    else results.push(i.toString());
  }
  return results;
};

var fizzBuzzReuse = function(n) {
  const results = [];

  let converted;
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) converted = `FizzBuzz`
    else if (i % 5 === 0) converted = `Buzz`
    else if (i % 3 === 0) converted = `Fizz`
    else converted = i.toString();
    results.push(converted);
  }
  return results;
};

var fizzBuzzBasic = function(n) {
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let converted;
    if (i % 15 === 0) converted = `FizzBuzz`
    else if (i % 5 === 0) converted = `Buzz`
    else if (i % 3 === 0) converted = `Fizz`
    else converted = i.toString();
    results.push(converted);
  }
  return results;
};

var fizzBuzzPush = function(n) {
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) results.push('FizzBuzz')
    else if (i % 5 === 0) results.push('Buzz')
    else if (i % 3 === 0) results.push('Fizz')
    else results.push(i.toString());
  }
  return results;
};

var fizzBuzzConstTemplateReuseCoerce = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  let converted;
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) converted = `${FIZZ}${BUZZ}`
    else if (i % 5 === 0) converted = `${BUZZ}`
    else if (i % 3 === 0) converted = `${FIZZ}`
    else converted = '' + i;
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstTemplateCoerce = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let converted;
    if (i % 15 === 0) converted = `${FIZZ}${BUZZ}`
    else if (i % 5 === 0) converted = `${BUZZ}`
    else if (i % 3 === 0) converted = `${FIZZ}`
    else converted = '' + i;
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstReuseCoerce = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  let converted;
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) converted = FIZZ + BUZZ
    else if (i % 5 === 0) converted = BUZZ
    else if (i % 3 === 0) converted = FIZZ
    else converted = '' + i;
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstCoerce = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let converted;
    if (i % 15 === 0) converted = FIZZ + BUZZ
    else if (i % 5 === 0) converted = BUZZ
    else if (i % 3 === 0) converted = FIZZ
    else converted = '' + i;
    results.push(converted);
  }
  return results;
};

var fizzBuzzConstTemplatePushCoerce = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) results.push(`${FIZZ}${BUZZ}`)
    else if (i % 5 === 0) results.push(`${BUZZ}`)
    else if (i % 3 === 0) results.push(`${FIZZ}`)
    else results.push('' + i);
  }
  return results;
};

var fizzBuzzConstPushCoerce = function(n) {
  const FIZZ = 'Fizz';
  const BUZZ = 'Buzz';
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) results.push(FIZZ + BUZZ)
    else if (i % 5 === 0) results.push(BUZZ)
    else if (i % 3 === 0) results.push(FIZZ)
    else results.push('' + i);
  }
  return results;
};

var fizzBuzzReuseCoerce = function(n) {
  const results = [];

  let converted;
  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) converted = `FizzBuzz`
    else if (i % 5 === 0) converted = `Buzz`
    else if (i % 3 === 0) converted = `Fizz`
    else converted = '' + i;
    results.push(converted);
  }
  return results;
};

var fizzBuzzBasicCoerce = function(n) {
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let converted;
    if (i % 15 === 0) converted = `FizzBuzz`
    else if (i % 5 === 0) converted = `Buzz`
    else if (i % 3 === 0) converted = `Fizz`
    else converted = '' + i;
    results.push(converted);
  }
  return results;
};

var fizzBuzzPushCoerce = function(n) {
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 15 === 0) results.push('FizzBuzz')
    else if (i % 5 === 0) results.push('Buzz')
    else if (i % 3 === 0) results.push('Fizz')
    else results.push('' + i);
  }
  return results;
};


// testing
const funcs = [
fizzBuzzConstTemplateReuse,
fizzBuzzConstTemplate,
fizzBuzzConstReuse,
fizzBuzzConst,
fizzBuzzConstTemplatePush,
fizzBuzzConstPush,
fizzBuzzReuse,
fizzBuzzBasic,
fizzBuzzPush,
fizzBuzzConstTemplateReuseCoerce,
fizzBuzzConstTemplateCoerce,
fizzBuzzConstReuseCoerce,
fizzBuzzConstCoerce,
fizzBuzzConstTemplatePushCoerce,
fizzBuzzConstPushCoerce,
fizzBuzzReuseCoerce,
fizzBuzzBasicCoerce,
fizzBuzzPushCoerce
];

// Functional Testing
let test;
let input;
let expect;
let result;

const assertEqual = (test, expect, result) => {
  expect = JSON.stringify(expect);
  result = JSON.stringify(result);;
  console.assert(expect === result, '%s, Expected: "%s", but got "%s"', test, expect, result);
}

for (let i = 0; i < funcs.length; i += 1) {
  test = `for ${funcs[i].name} smallest case, should fail`;
  input = 1;
  expect = 0;
  result = funcs[i](input);
  assertEqual(test, expect, result);

  test = 'smallest case success';
  input = 1;
  expect = ['1'];
  result = funcs[i](input);
  assertEqual(test, expect, result);

  test = 'up to first Fizz';
  input = 3;
  expect = ['1', '2', 'Fizz'];
  result = funcs[i](input);
  assertEqual(test, expect, result);

  test = 'up to first Buzz';
  input = 5;
  expect = ['1', '2', 'Fizz', '4', 'Buzz'];
  result = funcs[i](input);
  assertEqual(test, expect, result);

  test = 'up to first FizzBuzz';
  input = 15;
  expect = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14',  'FizzBuzz'];
  result = funcs[i](input);
  assertEqual(test, expect, result);
}

console.log('DONE FUNCTIONAL TESTING!');


// testing run times
console.log('Begining Time Trials');
for (let i = 0; i < funcs.length; i += 1) {
  // set which function is getting tested
  const func = funcs[i];

  // set how many test runs to do
  let totalTime = 0;
  let numRuns = 50;
  for (let testCount = 0; testCount < numRuns; testCount += 1) {
    const start = Date.now();
    for (let testN = 20; testN < 5000; testN += 1) func(testN);
    const end = Date.now();
    totalTime += end - start;
  }

  // log the results for this function
  const aveTime = totalTime / numRuns;
  console.log(`${aveTime} milliseconds average for ${func.name}`);
}
console.log('End Time Trials');
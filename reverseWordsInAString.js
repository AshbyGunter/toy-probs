/*
        Reverse Words in a String problem from leetcode: leetcode.com

O: a string, with the word order from the given string reveresed, leading and trailing spaces removed, and adjusted to have just 1 space between words
I: a string
C: none given
E: string could be empty, could be only spaces, could have lots of spaces between words, could be a single letter
Plan:
a general plan for this is to convert to an array, reverse the entire string to get words in place, then reverse each word
this would not deal with the whitespace issues, however
so we could then run through the result, trim out excess spaces, then return result after rejoining to a string

Alternate:
split by word
reverse their order
trim each word
add to result

*/

var reverseWords = function(s) {
  const words = s.split(' ');
  let result = '';
  for (let i = words.length - 1; i >= 0; i -= 1) {
    if (words[i] !== '') result += `${words[i].trim()} `;
  }
  return result.trim();


  // let result = '';
  // const copy = s.trim().split('');
  // if (copy.length === 0) return result;
  // if (copy.length === 1) return copy.toString();

  // copy.reverse();
  // let startOfWord = 0;
  // for (let i = 0; i < copy.length; i += 1) {
  //   if (copy[i] === ' ' || i === copy.length - 1) {
  //     if (result.length > 0) result = `${result} `;
  //     let fixedWord = copy.slice(startOfWord, i + 1).reverse().join('').trim();
  //     result = `${result}${fixedWord}`;
  //     while (copy[i + 1] === ' ') i += 1;
  //     startOfWord = i + 1;
  //   }
  // }

  //   return result;
};

// tests
let test;
let result;

test = '';
result = reverseWords(test);
console.assert(result === '', 'failed with "%s" returned from "%s" for empty string', result, test);

test = 'a';
result = reverseWords(test);
console.assert(result === 'a', 'failed with "%s" returned from "%s" for single letter', result, test);

test = '       ';
result = reverseWords(test);
console.assert(result === '', 'failed with "%s" returned from "%s" for string of spaces', result, test);

test = 'boogie';
result = reverseWords(test);
console.assert(result === 'boogie', 'failed with "%s" returned from "%s" for just one word', result, test);

test = 'down get';
result = reverseWords(test);
console.assert(result === 'get down', 'failed with "%s" returned from "%s" ', result, test);

test = 'the sky is blue';
result = reverseWords(test);
console.assert(result === 'blue is sky the', 'failed with "%s" returned from "%s" ', result, test);

test = '  hello world!  ';
result = reverseWords(test);
console.assert(result === 'world! hello', 'failed with "%s" returned from "%s" ', result, test);

test = 'a good   example';
result = reverseWords(test);
console.assert(result === 'example good a', 'failed with "%s" returned from "%s" ', result, test);

console.log('Done Testing!');
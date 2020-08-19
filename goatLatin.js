/*
        Goat Latin problem from leetcode: leetcode.com

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.

If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".

Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.

O: a string, with each word from the given string modified by goat latin rules
I: a string, composed of words that are made of upper and lower case letters only, from 1 through 150 characters long
C: no time or space constraints given
E: it could have only one word
   some words could be very short - 1 letter, or very long
   the sentance could be very long
   could be all single letter words
   could be line breaks? assuming no for now
Plan:
since there is no punctuation to worry about, it makes it easier
split the string into words based on a space ' '
go through each word and apply the rules to modify it
use a set of vowels to help with identifying a vowel
define a string to hold what gets appended to the end of the word, start with the number of 'a's equal to it's place/index + 1
check the first letter of the word
if it's a vowel, add 'ma' to the beginning of the append string
otherwise, slice off the first letter and add it to the beginning of the append string
modify the word in the list

after dealing with all the words, join them back together with spaces in between

*/

var toGoatLatin = function(S) {
  // define a set of the vowels
  const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const words = S.split(' ');


  // extraAs will have an 'a' added for each word
  let extraAs = '';

  for (let i = 0; i < words.length; i += 1) {
    let currWord = words[i];
    let append = 'ma';

    // add an 'a' to append for each loop iteration
    extraAs = `${extraAs}a`;

    if (!VOWELS.has(currWord[0])) {
      const consonant = currWord[0];
      currWord = currWord.slice(1);
      append = `${consonant}${append}`;
    }
    currWord = `${currWord}${append}${extraAs}`;
    words[i] = currWord;
  }

  // join the words together to make a string with a space between words
  const result = words.join(' ');
  return result;
};

// testing
let test;
let input;
let expect;
let result;

test = 'one letter, uppercase vowel';
input = 'A';
expect = 'Amaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'one letter, consonant';
input = 'B';
expect = 'Bmaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'five "words", all single vowels';
input = 'a E i O U';
expect = 'amaa Emaaa imaaaa Omaaaaa Umaaaaaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'five "words", all single consonant';
input = 'B c D f G';
expect = 'Bmaa cmaaa Dmaaaa fmaaaaa Gmaaaaaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'single multi letter word, start with vowel';
input = 'Away';
expect = 'Awaymaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'single multi letter word, start with consonant';
input = 'Pleasant';
expect = 'leasantPmaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'several word sentance, mixed sizes and 1st letter';
input = 'I speak Goat Latin';
expect = 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

test = 'longer sentance, mixed sizes and 1st letter';
input = 'The quick brown fox jumped over the lazy dog';
expect = 'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa';
result = toGoatLatin(input);
console.assert(expect === result, 'on %s, Expected: "%s", but got "%s"', test, expect, result);

console.log('TESTING DONE!');
// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
// Examples

// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

// My solution:
function countConsonants(str) {
  const vowels = ['a','e','i','o','u'];
  const uniqueConsonants = [];
  str = str.replaceAll(/[^\-'\w]|[0-9]/g, 'a').toLowerCase();
  for(let i=0; i < str.length; i++) {
    if(!vowels.includes(str[i]) && !uniqueConsonants.includes(str[i])) {
      uniqueConsonants.push(str[i]);
    }
  }
  return uniqueConsonants.length;
}

// params: string of letters but may contain numbers/symbols too
// ret: integer number representing the unique consonants from the string

// ex: countConsonants('add') => 1
// ex: countConsonants('aeiou') => 0
// ex: countConsonants('sillystring') => 7

// create a regex for vowels
// create a variable 'uniqueConsonants' that will hold the unique consonants
// get rid of symbols/numbers
// loop through the string and compare each letter:
// if letter !== to vowels and is not included in 'uniqueConsonants' then push it
// return the length of 'uniqueConsonants'
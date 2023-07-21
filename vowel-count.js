// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution:
function getCount(str) {
    let count = 0;
    for(let i=0; i < str.length; i++) {
      if(str[i].replace(/[a,e,i,o,u]/g, 'a') === 'a') {
        count++;
      }
    }
    return count;
}
  
// param: string of lower case letters and/or spaces
// ret: number of vowels in str
  
// ex: getCount('hello world') => 3
// ex: getCount('this is a codewars challenge') => 9
  
// create a variable "count"
// loop through the string
// evaluate each letter, if it's a vowel, then add 1 to count
// return count
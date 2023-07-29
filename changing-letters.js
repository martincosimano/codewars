// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

// My solution:

function swap (string) {
    const vowels = /[a,e,i,o,u]/gi;
    const capitalizedVowels = [];
    const splittedString = string.split('');
    for(let i=0; i < splittedString.length; i++) {
      if(splittedString[i].match(vowels)) {
        capitalizedVowels.push(splittedString[i].toUpperCase());
      }else {
        capitalizedVowels.push(splittedString[i]);
      }
    }
    return capitalizedVowels.join('');
}
  
  // params: string
  // ret: same string with all the vowels capitalized
  
  // ex: swap("Hello World!") => "HEllO WOrld!"
  
  // create a variable to hold the result
  // split the string into an array
  // loop through each letter of the string
  // push each letter to the new array, if it's a vowel, push it capitalized
  // join the new arr
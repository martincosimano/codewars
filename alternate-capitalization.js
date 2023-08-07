// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// My solution:
function capitalize(s){
    const evenCapitalization = [];
    const oddCapitalization = [];
    for(let i=0; i < s.length; i++) {
      if(i % 2 === 0) {
        evenCapitalization.push(s[i].toUpperCase());
        oddCapitalization.push(s[i]);
      }else {
        evenCapitalization.push(s[i]);
        oddCapitalization.push(s[i].toUpperCase());
      }
    }
    return [evenCapitalization.join(''), oddCapitalization.join('')];
  };
  
  // params: lowercase string of letters with no spaces
  // ret: array of 2 input string with alternate capitalization
  
  // ex: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
  
  // create two variables to hold each capitalized string
  // loop through the string
  // push strings to the array:
  //            starting capitalizating the even letters
  //            starting capitalizating the odd letters
  // return both strings joined in the same array
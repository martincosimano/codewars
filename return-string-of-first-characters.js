// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"

// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// My solution:
function makeString(s){
    let initials = '';
    s = s.split(' ');
    for(let i=0; i < s.length; i++) {
      initials += s[i][0];
    }
    return initials;
}

// ANOTHER SOLUTION
// function makeString(s) {
//     return initials = s.split(' ').map((e) => e[0]).join('');
// }
  
  
  // params: "s" as string
  // ret: string of first character of each word in the input string
  
  // ex: makeString("This Is A Test") ==> "TIAT"
  
  // create a variable "initials" as an empty string that will hold the first letter of each word
  // split the string
  // do a loop
  // in each iteration grab the first letter from each element
  // join those elements to "initials" and return it
  
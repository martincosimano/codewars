// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2

// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

// My solution:
function nthChar(words){
    const concatenated = [];
    for(let i=0; i < words.length; i++) {
     concatenated.push(words[i][i]);
   }
    return String(concatenated.join(''));
}
  
  // params: array of words
  // return: string with the concatenation of "n"th letter from each word
  
  // ex: nthChar(["yoda", "best", "has"])  -->  "yes"
  
  // define a variable "concatenated" that will hold the concatenation
  // iterate through the array
  // each iteration, grab the n letter from the string and push it to "concatenated"
  // return joined string "concatenated"
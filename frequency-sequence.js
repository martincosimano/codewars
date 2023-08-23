// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// My solution:
function freqSeq(str, sep) {
    let frequency = '';
    let count = 0;
    for(let i=0; i < str.length; i++) {
        for(let j=0; j < str.length; j++) {
            if(str[i] === str[j]) {
            count ++;
            }
        }
        frequency += sep + count;
        count = 0;
    }
    return frequency.slice(1);
}
  
  
  // params: "str" as an string, "sep" as a character
  // ret: string counting "str" elements separating each number with "sep"
  
  // ex: freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1'
  // ex: freqSeq('19999999',    ':'), '1:7:7:7:7:7:7:7'
  
  // create variable "frequency" as an empty string
  // create a variable "count" as 0
  // loop through and count how many times the element appears
  // when finishing evaluating an element, join "sep" and count number to "frequency", then reset the count number
  // return the string removing the first "sep"
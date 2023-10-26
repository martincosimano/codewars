// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My solution:
function findLongest(array){
    const numsDigits = array.map(e => String(e).length);
    const longestDigit = numsDigits.map(e => e).sort((a,b) => b - a)[0];
    return array[numsDigits.indexOf(longestDigit)];
  }
  
  /*
  params: "array" as an array of numbers
  ret: the number with most digits from "array"
  
  ex:
    findLongest([1, 10, 100]), 100
    findLongest([9000, 8, 800]), 9000
    findLongest([8, 900, 500]), 900
  
  create a variable "numsDigits" and store the number of digits for each element from the array.
  create a variable "longestDigit" and store the value of the longest number of digits found in "numsDigits".
  return the original number from the input array that corresponds to the longest number of digits found in "numsDigits.
  */
// You received an array with two strings. Create a function that will return their product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

// My solution:
function arrMultiply(arr){
  return String(arr.reduce((acc, cv) => acc * Number(cv),1));
}

// params: "arr" as an array with two strings
// ret: product of "arr" as a string

// ex: arrMultiply(['4','5']),"20"
// ex: arrMultiply(['2','-5']),"-10"
// ex: arrMultiply(['9','0']),"0"

// use a reduce
// convert the arr string into numbers
// return the product as a string
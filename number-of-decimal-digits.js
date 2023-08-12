// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.


// My solution:
function digits(n) {
    return String(n).split('').length;
}
  
//  params: "n" as number
//  ret: total digits of "n"
  
//  ex: digits(9) => 1
//  ex: digits(66) => 2
//  ex: digits(128685) => 6
  
//  convert n into an string
//  split "n"
//  return the length of splitted "n"
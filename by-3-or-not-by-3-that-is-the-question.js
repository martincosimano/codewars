// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

// Try to avoid using the % (modulo) operator.

// My solution:
function divisibleByThree(str){
    let sum = 0;
    for(let i=0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    return sum % 3 === 0;
}
  
  // params: "str" as string of numbers
  // return: if "str" sum of elements is divisible 8by three, return true. Else return false
  
  // ex:
  //  divisibleByThree("123") = true
  //  divisibleByThree("8409") = true
  //  divisibleByThree("100853") = false
  
  // create a variable "sum" that wild hold the sum of all digits from the input string
  // convert the input "str" to number
  // sum the digits and set the result to the value of "sum"
  // check if the sum is divisible by 3
  // if that's true, return "true". Else return "false"
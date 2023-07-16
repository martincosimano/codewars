// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string", 3, 5) 

// My solution:
function modifyMultiply (str,loc,num) {
  const multiplyStr = str.split(' ')[loc];
  return multiplyStr.concat('-').repeat(num).slice(0, -1);
}

// params: str as string, loc as location number of str to multiply, num as the times to multiply it.
// ret: multiplied string separated by a hyphen

// ex: modifyMultiply("This is a string", 3, 5) = "string-string-string-string-string"

// identify the string to multiply
// multiply the string 'num' amount of times
// add a hyphen between each multiplied str
// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

// My solution:
function evenChars(string) {
    return string.length < 2 || string.length > 100 ? 'invalid string' : string.split('').filter((e, i) => i % 2 !== 0);
  }
  
  /*
  params: "string" as a string
  ret: if "string" is smaller than 2 characters or longer than 100, return 'invalid string'. Else return the even characters.
  
  ex:
    "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
    "a"             --> "invalid string"
  
  check if the string length is smaller than 2 or higher than 100
  split the string into an array
  filter the even characters and return them
  */
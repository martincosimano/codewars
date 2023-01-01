// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):

// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Good Luck!

// My solution:
function doubleChar(str) {
  let repeated = ''
  for(let i = 0; i < str.length; i++){
    repeated = repeated + (str[i] + str[i])
  }
  return repeated
}
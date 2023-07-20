// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
// Examples (input -> output)

//     "kata" -> false ('a' comes after 'k')
//     "ant" -> true (all characters are in alphabetical order)

// My solution:
function alphabetic(s) {
  return s.split('').sort().join('') === s;
}

//  params: string of lowercase letters
//  ret: true/false depending on whether the string is in alphabetical order or not

//  ex: alphabetic("kata") => false
//  ex: alphabetic("ant") => true

//  split the str into an array and sort it in alphabetic order
//  join the string and compare:
//  if the sorted string === to the initial string, then return true, else false
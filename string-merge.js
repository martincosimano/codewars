// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
// Examples

// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

// My solution:
function stringMerge(string1, string2, letter){
    const firstHalf = string1.slice(0, string1.indexOf(letter));
    const secondHalf = string2.slice(string2.indexOf(letter));
    return firstHalf + secondHalf;
  }
  
  /*
  params: "string1", "string2" and "letter" as strings
  return: a string combining both words, merged at the point where "letter" first appears in each word.
  
  ex:
    stringMerge("person","here", "e"), "pere"
    stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh"
    stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz"
  
  create 2 variables
  the first one will hold the string1 up to "letter"
  the second one will hold the string2 starting from "letter"
  return both combined
  */
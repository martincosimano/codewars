// vowelOne

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

// My solution:
function vowelOne(s){
    s = s.replaceAll('1', '0').replaceAll(/[aeiou]/gi, '1');
    for(let i=0; i < s.length; i++) {
      if(s[i] !== '1') {
        s = s.replace(s[i], '0');
      }
    }
    return s;
  }
  
  
  //  param: string of letters
  //  ret: string of 1's and 0's. 1 => vowel ; 0 => consonant
  
  //  ex: vowelOne("abceios") => "1001110"
  //  ex: vowelOne("aeiou, abc") => "1111100100"
  
  //  replace all the 1s with 0s and the vowels with 1s
  //  loop through the string
  //  if the entry is not 1 then replace it to 0
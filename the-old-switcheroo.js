// Write a function

// vowel2index(str)

// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''

// Your function should be case insensitive to the vowels.

// My solution:
function vowel2index(str) {
    const vowels = /^[aeiou]$/i;
    const result = [];
    for(let i=0; i < str.length; i++) {
      if(vowels.test(str[i])) {
        result.push(i + 1);
      }else {
        result.push(str[i]);
      }
    }
    return result.join('');
}
  
  
  //  params: string
  //  ret: same string, replacing all vowels with the number of their positions within the string
  
  //  ex: vowel2index('this is my string') == 'th3s 6s my str15ng'
  //  ex: vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
  //  ex: vowel2index('') == ''
  
  // iterate through the string
  // check if the letter is a vowel
  // if its a vowel, replace it with the number position within the string
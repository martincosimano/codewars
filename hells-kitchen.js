// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// My solution:
function gordon(a){
  let replacedString = a.replaceAll(/a/g, '@').replaceAll(/[e,i,o,u]/g, '*').toUpperCase().split(' ');
  for(let i=0; i < replacedString.length; i ++) {
    replacedString[i] += '!!!!';
  }
  return replacedString.join(' ');
}

// params: string of 4 words
// ret: string in "Gordon language" 

//ex: gordon('are you stu pid') = '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
//ex: gordon('you really su ck') = 'Y**!!!! R*@LLY!!!! S*!!!! CK!!!!'

//replace letter a,A for @ and rest of vowels for *
//split and loop through to add '!!!!' at the end of each one.
//return the entire string
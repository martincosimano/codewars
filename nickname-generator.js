// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"

// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"

// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

//     Vowels are "aeiou", so discount the letter "y".
//     Input will always be a string.
//     Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
//     The input can be modified

// My solution:
function nicknameGenerator(name){
    const vowels = /[aeiou]/g;
    if(name.length < 4) {
      return 'Error: Name too short';
    }else if(name[2].match(vowels)) {
      return name.slice(0,4);
    }else {
      return name.slice(0,3);
    }
  }
  
  /*
  params: "name" as a string of letters
  ret: string of letters
  
  ex: 
    nickname("Robert") //=> "Rob"
    nickname("Kimberly") //=> "Kim"
    nickname("Samantha") //=> "Sam"
    
  create a variable "vowels" as a regex
  do some checks:
  if the 3rd letter is a consonant, return the first 3 letters.
  if the 3rd letter is a vowel, return the first 4 letters.
  if the string is less than 4 characters, return "Error: Name too short".
  */
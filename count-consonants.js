// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// My solution:
function consonantCount(str) {
    let count = 0;
    const vowels = ['a','e','i','o','u'];
    for(let i = 0; i < str.length; i++) {
      if(!vowels.includes(str[i].toLowerCase()) && str[i].match(/[A-Z]/gi)) {
        count += 1;
      }
    }
    return count;
  }
  
  // params: receiving always strings but can contain nums or symbols as strings.
  // return: the number of consonants the string has.
  
  // ex:
  // consonantCount('guitar') = 3
  // consonantCount('bear') = 2
  // consonantCount('crocodile') = 5
  
  // we have to define a variable to hold the count of consonants.
  // also define a constant that holds the vowels (since they're less than consonants).
  // then loop through the string's letters.
  // if the letter !== vowel && is a letter -> +1 to the count.
  // return the total count.
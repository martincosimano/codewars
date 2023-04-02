// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.
// Example

// text before = "abc"
// character   = "z"
// text after  = "zzz"

// My solution:
function contamination(text, char){
    if(char.length === 0){
      return ''
    }
    for(let i = 0; i < text.length; i++){
      text = text.replace(text[i], char)
    }
    return text
}
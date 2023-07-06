// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 

// Note: you will be provided atleast one word and should take string as input and return string as output.

// My solution:
function dropCap(word) {
    let arr = word.split(' ');
    let capitalizedWord = arr.map((word) => word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word);
    return capitalizedWord.join(' ')
  }
  
  // params: "word" string of letters
  // ret: "word" capitalized if each word.length > 2
  
  // dropCap("apple") = "Apple"
  // dropCap("apple of banana") = "Apple of Banana"
  
  // split "word" deleting spaces
  // iterate through
  // if word.length > 2 uppercase first letter
  // join array
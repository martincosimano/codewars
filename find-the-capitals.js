// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My solution:
function capitals(word) {
  let indexes = [];
  for(let i=0; i < word.length; i++) {
    if(word[i].match(/[A-Z]/)) {
      indexes.push(i);
    }
  }
  return indexes;
}

// params: single word(string) with some capital letters.
// ret: ordered array containing the indexes of the capital letters.

//ex: 
// findCapitals('mOnDAy') = [1,3,4]
// findCapitals('cROCOdilE') = [1,2,3,4,8]
// findCapitals('PurpLE') = [0,4,5]

// define a variable called "indexes", an empty array that will hold the indexes
// loop through the input
// if letter is capitalized, then push the index to the var "indexes"
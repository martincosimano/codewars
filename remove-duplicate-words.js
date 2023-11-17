// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My solution:
function removeDuplicateWords(s) {
    const newArr = s.split(' ');
    return newArr.filter((word, i) => newArr.indexOf(word) === i).join(' ');
}

/*
params: "s" as an string.
ret: "s" removing duplicated words.
 
ex:
  removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta'
 
split "s" into an array of words
filter duplicated words and return the result
*/
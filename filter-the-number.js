// Filter the number

// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
// Task

// Your task is to return a number from a string.
// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// My solution:
var filterString = function(value) {
    const nums = value.split('').filter((e) => Number(e) % 1 === 0).join('');
    return Number(nums);
}
  
  // params: string of numbers and letters
  // ret: all the numbers from the string, in the same order
  
  // ex: filterString("a23jal1") => 231;
  // ex: filterString("9gkjdwk091") => 9091;
  
  // create a variable 'nums' that will hold the numbers
  // split the string into an array
  // loop through and evaluate each element
  // if it's a number, then push it to 'nums'
  // return nums
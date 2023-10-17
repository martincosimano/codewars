// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

// My solution:
function isSortedAndHow(array) {
    const arrayAscending = array.map(e => e).sort((a, b) => a - b);
    const arrayDescending = array.map(e => e).sort((a, b) => b - a);
    if(String(arrayAscending) === String(array)) {
      return "yes, ascending";
    }else if(String(arrayDescending) === String(array)) {
      return "yes, descending";
    }else {
      return "no";
    }
  }
  
/*
    params: "array" as an array of integers
    ret: 
        "yes, ascending" - if the numbers in the array are sorted in an ascending order
        "yes, descending" - if the numbers in the array are sorted in a descending order
        "no" - otherwise
  
duplicate the array and save it in two new variables
sort the variables
use the new variables to compare as strings with the input array and check cases
*/
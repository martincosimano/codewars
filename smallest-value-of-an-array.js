// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// My solution:
function min(arr, toReturn) {
    const sortedArr = arr.map(num => num).sort((a, b) => a - b);
    return toReturn === 'value' ? sortedArr[0] : arr.indexOf(sortedArr[0]);
}
  
  //  params: array of nums with no duplicates and a string 'value' or 'index'
  //  ret: integer number: smallest value or index
  
  //  ex: min([1,2,3,4,5], 'value') => 1
  //  ex: min([1,2,3,4,5], 'index') => 0
  
  //without mutating the arr sort it in ascending order and store it in a new variable.
  //if the string provided is "value", then return the first number of the sorted arr.
  //if the string provided is "index", then return the index of the smallest number from the original arr.
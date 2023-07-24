// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined

// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

// My solution:
var isSquare = function(arr){
    const newArr = arr.map((num) => Math.sqrt(num) === Math.floor(Math.sqrt(num)));
    return newArr.length ? !newArr.includes(false) : undefined;
  }
  
  // param: array of positive integers. It may be empty
  // ret: true if all elemenst in the array are square numbers. Otherwise, false. If the arr is empty, then return undefined
  
  // ex: isSquare([1, 4, 9, 16]) --> true
  // ex: isSquare([3, 4, 7, 9]) --> false
  
  // loop through the elements
  // check if each element are square numbers
  // create new arr and push each square number
  // if the newArr is empty return undefined. If it does not contains integers, then return false, otherwise true
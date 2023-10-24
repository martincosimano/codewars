// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// My solution:
function solve(arr){
    const noRepeats = arr.filter((num, i) => arr.indexOf(num) === i);
    return noRepeats.reduce((acc,cv) => acc + cv, 0);
    
  }
  
  /*
  params: "arr" as an array of integers.
  ret: a number that doesn't have a negative/positive in the array
  
  ex:
    solve([1,-1,2,-2,3]),3
    solve([-3,1,2,3,-1,-4,-2]),-4
    solve([1,-1,2,-2,3,3]),3
  
  remove duplicates from "arr"
  apply a reduce, that will return the 'unique' number
  */
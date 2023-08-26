// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]

// the function should return :

// [1,4,3,8]

// My solution:
function doubleEveryOther(a) {
  return a.map((num,i) => i % 2 !== 0 ? num * 2 : num);
}

/*
params: "a" as an array of integers
ret: an array of integers representing the input array, doubling each odd number
ex: 
  doubleEveryOther([3,4,2,1]) => [1,4,3,8]
  doubleEveryOther([3,8,2,1]) => [3,8,2,1]
-map through each element from the array
-double each odd index element
*/
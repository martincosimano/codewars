// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

// function double(array) {
//     // Use array.map() to return a new array with each value twice
//     // as large as the corresponding value in the passed in array.
// }

// For example:

// var someNumbers = [1,2,10,57];

// double(someNumbers); // should return [2,4,20,114]

// My solution:
const double = (array) => array.map(num => num * 2);

/*
params: "array" as an array of numbers
ret: an array with the elements from the input array multiplied by 2

ex: 
  var test1 = [1,2,3,4,5];
  var test2 = [71,-548,12.3,31415];
  double(test1), [2,4,6,8,10]
  double(test2), [142,-1096,24.6,62830]
*/
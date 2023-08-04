// Oh no!

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// My solution:
function toNumberArray(stringarray){
    return stringarray.map((e) => Number(e));
}
  
// params: array of strings
// ret: array of numbs
  
// ex: toNumberArray(["1", "2", "3"]) => [1, 2, 3];
// ex: toNumberArray(["5.3", "2"]) => [5.3, 2];
  
// loop through each array
// convert the string into a number
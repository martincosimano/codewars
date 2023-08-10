// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

// My solution:
const arrCheck = value => {
    let result = true;
    for(let i=0; i < value.length; i++) {
      if(!Array.isArray(value[i])) {
        result = false;
      }
    }
    return result;
}
  
//  params: array as value with many nested data types
//  ret: true if the input array has nested arrays, otherwise false
  
/*  ex: 
        [[1],[2]] => true
        ['1','2'] => false
        [{1:1},{2:2}] => false
*/
  
//  iterate through each element from the original array
//  check if all of them are arrays
//  return true if that's correct, else return false
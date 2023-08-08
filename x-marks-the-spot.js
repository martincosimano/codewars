// Task:

// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.
// Examples

// Input: []

// Return an empty array if input is an empty array => []

// Input: [
//   ['o', 'o'],
//   ['o', 'o']
// ]

// Return an empty array if no x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'x']
// ]

// Return an empty array if more than one x found => []

// Input: [
//   ['x', 'o'],
//   ['o', 'o']
// ]
// Return [0,0] when x at top left => [0, 0]

// Input: [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]
// Return [4,6] for the example above => [4, 6]

// My solution:
const xMarksTheSpot = (input) => {
    let count = 0;
    const coordinates = [];
    for(let i=0; i < input.length; i++) {
      for(let j=0; j < input[i].length; j++) {
        if(input[i][j] === 'x') {
          count++;
          coordinates.push(i,j);
        }
      }
    }
    return count === 1 ? coordinates : [];
  }
  
  // params: input which value will be an array of array holding strings
  // ret: if "x" is not inside the array or it appears multiple times, return an empty array.
  //      if "x" appears just once, then return the coordinates of "x" as an array
  
  // xMarksTheSpot([
  //  ['o', 'o'],
  //  ['o', 'o']
  //  ])      ==> []
  
  // xMarksTheSpot(Input: [
  //  ['x', 'o'],
  //  ['o', 'x']
  //  ]) => []
  
  // xMarksTheSpot([
  //  ['x', 'o'],
  //  ['o', 'o']
  //  ]) => [0,0]
  
  //  create a variable name "count" = 0
  //  create a variable to hold the array and index of "x" as an empty array
  //  iterate through each nested array
  //  look for an "x" on each iteration
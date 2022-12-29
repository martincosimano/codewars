// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// My solution:
function maps(x){
    let doubles = x.map(function(x) {
      return x * 2
    })
    return doubles
}
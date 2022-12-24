// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My solution:
function sumMix(x){
    const nums = x.map(x => Number(x))
    return nums.reduce((x, acc) => x + acc, 0)
}
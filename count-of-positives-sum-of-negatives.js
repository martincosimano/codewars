// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution:
function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0) {
      return []
    }else {
        let result = []
    let positiveNums = input.filter(x => x > 0)
    let negativeNums = input.filter(x => x < 0)
    let negativeSum = negativeNums.reduce((acc, x) => acc + x, 0)
    result.push(positiveNums.length, negativeSum)
    return result
    }
}
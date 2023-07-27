// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]

// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

// My solution:
function solve(arr){
    const newArr = [];
    const minArr = arr.map(num => num).sort((a, b) => a - b);
    const maxArr = arr.map(num => num).sort((a, b) => b - a);
    let i = 0;
    while (newArr.length < arr.length) {
      newArr.push(maxArr[i]);
      newArr.push(minArr[i]);
      i++;
    }
    return Array.from(new Set(newArr));
};
  
  // param: arr of nums
  // ret: arr ordered so that the first max value is followed by the first minimum, followed by second max value then second min value, etc
  
  // ex: solve([15,11,10,7,12]) = [15,7,12,10,11]
  
  // create a new arr that will hold the result
  // create 2 arrs, the first one with the elements ordered from min to max and the 2nd one with the opposite order
  // iterate till new arr has the same length of the original arr
  // in each iteration, push one value from the maxArr and one from the minArr
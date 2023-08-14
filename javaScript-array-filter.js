// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// My solution:
function getEvenNumbers(numbersArray){
    return numbersArray.filter((num) => num % 2 === 0);
}
  
// params: "numbersArray" as an array of numbers
// ret: array of even numbers
  
// ex: getEvenNumbers([2,4,5,6]) => [2,4,6]
  
// filter the even numbers from the input array
// You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

// Between each number should be a space and after the final number (n) should be the word 'liftoff!'

// Example:

// // Given
// instructions = [8,1,10,2,7,9,6,3,4,5]
// // Should return
// "10 9 8 7 6 5 4 3 2 1 liftoff!"
// // Given
// instructions = [1,2,4,3,5]
// // Should return
// "5 4 3 2 1 liftoff!"

// My solution:
function liftoff(instructions){
    let sortedArr = (instructions.sort((a, b) => b - a)).concat('liftoff!');
    return String(sortedArr).replaceAll(',', ' ');
}
  
  //  params: array of nums
  //  return: string of nums sorted in descending order, and a "liftoff!" instead of 0.
  
  //  ex: liftoff([8,1,10,2,7,9,6,3,4,5]) = "10 9 8 7 6 5 4 3 2 1 liftoff!"
  //  ex: liftoff([1,2,4,3,5]) = "5 4 3 2 1 liftoff!"
  
  // sort the array in descending order and store it in a variable.
  // add "liftoff!" to the end of the array.
  // remove the ','.
  // convert the array into a string.
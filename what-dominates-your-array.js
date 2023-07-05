// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// My solution:
function dominator(arr) {
  let count = 1;
  let dominatorCount = Math.floor(arr.length / 2) + 1;

  arr.sort((a, b) => a - b);

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] === arr[i - 1]) {
      count ++;
      if(count === dominatorCount) {
        return arr[i];
      }
    }else {
      count = 1;
    }
  }
  
  return -1;
}


// params: arr of numbers
// return: dominant number within the array. If doesn't have any return -1

// ex: dominator([4,1,5,8,1,2,3,3,1,1]) = 1
// ex dominator([3,2,1,2,3,2,4]) = 2
// ex dominator([5,7,6,5,1,2,5,7,5,5,7,5]) = 5

// define a "count" variable with the value of 1
// define a "dominatorCount" variable that will hold the value of the array.length / 2 + 1 (so the dominator will be the number which appears 1 more time than the half of the entire array)
// sort the array in ascending order
// loop through starting from index 1
// if the evaluated number is equal to the previous number sum 1 to count. If not, reset count to 1
// return the number that makes count equal to dominatorCount
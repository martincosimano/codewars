// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

// My solution:
function smaller(nums) {
    let count = 0;
    let arr = [];

    for(let i=0; i < nums.length; i++) {

        for(let k= i + 1; k < nums.length; k++) {
            if(nums[i] > nums[k]) {
                count += 1;
            }
        }
        arr.push(count);
        count = 0;
    }
    return arr;
}

// params: array of numbers
// ret: count (to the right) how many elements are smaller than arr[i] and return a new array of nums

// smaller([1, 2, 3]) = [0,0,0]
// smaller([4,1,2,6,6,3,2]) = [4,0,0,2,2,1,0]

// define a "count" variable
// define an empty "arr" variable
// loop through each num
// compare arr[i] to the elements to the right. If it's greater sum 1 to count
// when finishing comparing arr[i], push count to arr and reset the count
// return arr
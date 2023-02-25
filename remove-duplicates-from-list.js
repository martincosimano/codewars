// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// My solution:
function distinct(nums) {
    const result = nums.filter((num, index) => nums.indexOf(num) === index);
    return result;
}
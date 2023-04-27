// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// My solution:
function largest(n, array) {
    const orderedArray = array.sort((a, b) => b - a);
    const result = [];
    for(let i = 0; i < n; i++) {
      result.push(orderedArray[i]);
    }
    return result.sort((a, b) => a - b);
}
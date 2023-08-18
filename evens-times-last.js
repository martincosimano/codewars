// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// My solution:
function evenLast(numbers) {
    const evenIndexNums = numbers.filter((num,i) => i % 2 === 0);
    const result = evenIndexNums.reduce((acc, cv) => acc + cv, 0) * numbers[numbers.length - 1];
    return !numbers.length ? 0 : result;
}

// params: "numbers" as an array of integers
// return: the sum of all integers with an even index, multiplied by the integer at the last index

// ex: evenLast([2, 3, 4, 5]), 30

// filter all the numbers with an even index
// do a sum of all those numbers
// if the initial array is empty return 0
// if not return the sum multiplied by the last number of the initial array
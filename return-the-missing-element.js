// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
// Examples:

// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

// My solution:
const getMissingElement = (superImportantArray) => superImportantArray.reduce((acc, cv) => acc - cv, 45);

/*
params: "superImportantArray" as an array of integers from 0 to 9.
ret: the missing number from the sequence 0-9.

ex:
  [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
  [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

we know that the sum of the sequence from 0-9 gives 45.
so simply sum the given array sequence and substract the result to 45
*/
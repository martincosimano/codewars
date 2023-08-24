// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// My solution:
function getAverageAge(list) {
    return Math.round(list.reduce((acc, cv) => acc + cv.age, 0) / list.length);
}
  
// params: "list" as an array of objects
// ret: an integer representing the average age between all objects
  
/* ex: 
list1 = [
{ firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];
  
Test.assertEquals(getAverageAge(list1), 50);
*/
  
// loop through the array
// sum each age number
// divide for the length of the array
// round up the result number
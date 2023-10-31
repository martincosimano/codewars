// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

//     true if at least one Ruby developer has signed up; or
//     false if there will be no Ruby developers.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];

// your function should return true.

// Notes:

//     The input array will always be valid and formatted as in the example above.

// My solution:
function isRubyComing(list) {
    return list.filter(list => list.language === 'Ruby').length ? true : false;
  }
  
  /*
  params: "list" as an array of objects.
  ret: true if an object's language === "Ruby", else false.
  
  filter the array to find out if there's any object with language === "Ruby".
  check the length, if has some, means the result is true, else false.
  */
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   returns 3

// My solution:

function strCount(obj){
let count = 0;
for (const key in obj) {
    if (typeof obj[key] === 'string') {
    count++;
    }else if (typeof obj[key] === 'object') {
    count += strCount(obj[key]);
    }
}
return count;
}
  
  // params: "obj" as an object
  // ret: integer representing the number of strings inside of "obj"
  /* ex: strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })
    //returns 3
  */
  // create a variable "count" as 0, which will hold the number of strings inside of "obj"
  // loop through the object properties
  // each time we find a string value, count ++
  // if we find an object, then call for the function again and sum the result to count
  // return count
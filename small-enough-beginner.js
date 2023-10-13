// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// My solution:
const smallEnough = (a, limit) => a.filter((e) => e > limit).length ? false : true;

  /*
  params: "a" as an array of numbers. "limit" as a number.
  ret: if the numbers within the array are below or equal to the limit value, return true. Else false.
  
  ex:
    smallEnough([66, 101], 200) => true
    smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) => false
  
  filter "a" to find if there's any number higher than "limit"
  if true, return false
  else return true
  */
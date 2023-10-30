// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.
// Examples:

// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

// At this level, you don't need validate months and days to calculate the difference.

// My solution:
const howManyYears = function(date1, date2){
    return Number(`${Math.abs(date1.split('/')[0] - date2.split('/')[0])}`);
  }
  
  /*
  params: "date1" and "date2" as date strings.
  ret: a number representing the difference between the years of "date1" and "date2".
  
  ex:
    howManyYears('1997/10/10', '2015/10/10'), 18
    howManyYears('1990/10/10', '2015/10/10'), 25
    howManyYears('2015/10/10', '1990/10/10'), 25
  
  split the string into an array
  grab the years of each date and do the substraction
  make sure to return a positive number
  */
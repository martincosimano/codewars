// Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// My solution:
function dontGiveMeFive(start, end) {
    const count = [];
    for(let i=start; i <= end; i++) {
      if(!i.toString().includes('5')) {
        count.push(i);
      }
    }
    return count.length;
}
  
  
  //  params: two parameters, both numbers
  //  ret: all numbers between the first param and the second one, excluding the numbers that has '5'
  
  //  ex: dontGiveMeFive(1,9) -> 1,2,3,4,6,7,8,9 -> Result 8
  //  ex: dontGiveMeFive(4,17) -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
  
  //  loop through from start to end nums
  //  evaluate if the number has a 5, if not then push to a new arr
  //  return the new arr
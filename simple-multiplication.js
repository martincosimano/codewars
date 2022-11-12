// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// My solution
function simpleMultiplication(number) {
    if(number % 2 === 0) {
      number *= 8
    } else {
      number *= 9
    } return number
}
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My solution:
function divCon(x){
    let result = 0
    x.forEach((num) => typeof num === "number" ? result += num : result -= Number(num));
    return result;
}
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

// My solution:
function getNumberFromString(s) {
    const nums = s.replace(/[^0-9]/g, '');
    return Number(nums);
}
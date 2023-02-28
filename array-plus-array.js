// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// My solution:
function arrayPlusArray(arr1, arr2) {
    const sumFirstArr = arr1.reduce((acc, cv) => acc + cv, 0);
    const sumSecondArr = arr2.reduce((acc, cv) => acc + cv, 0);
    return sumFirstArr + sumSecondArr;
}
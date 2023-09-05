// Find and return second largest unique number in given Array.

// Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

// If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.
// Examples

// secondLargest([1, -2, 3]) = 1;
// secondLargest([5, 5, 4]) = 4;
// secondLargest([2, '3', 4]) = 3;

// Should return

// // 1. Passed value not an Array:
// secondLargest("1 2 3") = undefined;

// // 2. There is no second largest:
// secondLargest([2, 2, 2]) = undefined;

// // 3. Ignore everything except:
// //   * numbers
// //   * not-NaN strings:
// secondLargest(['-1', 2, null, false]) = -1;

// Input range

//     Numbers are safe Integers.
//     Not-NaN strings represent safe Integers.

// My solution:
function secondLargest(array) {
    if (!Array.isArray(array)) {
        return undefined;
    }
    const filtered = array.filter((el) => typeof el !== "boolean" && Number(el) || el === 0);
    const sorted = filtered.sort((a, b) => b - a);
    const noRepeat = [...new Set(sorted)];
    return noRepeat.length > 1 ? Number(noRepeat[1]) : undefined;
}

/*
params: "array" as an array of any data type
ret: if passed v alue is not an array or if there is no second largest item in given array, return undefined
 
ex: 
secondLargest([1, -2, 3]) = 1;
secondLargest([5, 5, 4]) = 4;
secondLargest([2, '3', 4]) = 3;
 
check if input param is an array
filter booleans, 0, and convert all to numbers
sort the filtered elements from highest to lowest
remove repeated elements
if the length is greater than 1, return the index 1 element. Else return undefined
*/
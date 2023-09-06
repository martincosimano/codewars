// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
// Examples

// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

// My solution:
function tailSwap(arr) {
    const splitted = arr.map((str) => str.split(':'));
    const firstSwap = [splitted[0][0], splitted[1][1]].join(':');
    const secondSwap = [splitted[1][0], splitted[0][1]].join(':');
    return [firstSwap, secondSwap];
}
  
/*
params: "arr" as an array with 2 strings
ret: "arr" with the string's characters after each colon swapped
  
ex: 
tailSwap(["abc:123", "cde:456"]) -->  ["abc:456", "cde:123"]
tailSwap(["a:12345", "777:xyz"]) -->  ["a:xyz", "777:12345"]
  
split the strings up to ":"
grab the first and the last part of each string
swap parts
return array as an array
*/
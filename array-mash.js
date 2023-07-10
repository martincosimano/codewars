// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

// My solution:
function arrayMash (array1, array2) {
  const newArr = [];
  for(let i=0; i < array1.length; i++) {
    newArr.push(array1[i]);
    newArr.push(array2[i]);
  }
  return newArr;
}

// params: 2 different arrays with same length
// ret: array with alternanting elements of the 2 arrays

// arrayMash([1,2,3], ['a','b','c']) = [1, 'a', 2, 'b', 3, 'c']
// arrayMash([a,b,c], [1,2,3]) = ['a', 1, 'b', 2, 'c', '3']

// define a const called newArr
// loop through
// push one element from each arr to newArr
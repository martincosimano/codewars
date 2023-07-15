// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

//     If the average length is not an integer, use Math.round().
//     The input array's length > 1

// My solution:
// Brute force
function averageLength(x) { 
  let count = 0;
  const newArr = [];

  for(let i=0; i < x.length; i++) {
    count += x[i].length;
  }
  const averageNum = Math.round(count / x.length);

  for(let i=0; i < x.length; i++) {
    let group = '';
    for(let k=0; k < averageNum; k++) {
      group += x[i][0];
    }
    newArr.push(group);
  }
  return newArr;
}
// Cleaner solution
function averageLength(x) { 
  let count = 0;
  for(let i=0; i < x.length; i++) {
    count += x[i].length;
  }
  const averageNum = Math.round(count / x.length);
  return x.map((letter) => letter[0].repeat(averageNum));
}


//  params: arr of strings
//  ret: arr of strings with each string having the same length as the array's average

// ex averageLength(['u', 'y']) = ['u', 'y']
// ex averageLength(['aa', 'bbb', 'cccc']) = ['aaa', 'bbb', 'ccc']
// ex averageLength(['aa', 'bb', 'ddd', 'eee']) = ['aaa', 'bbb', 'ddd', 'eee']

// create a variable to count the length of arr
// loop through the array and count the length of each string
// divide the count according to the length of initial arr to get the average
// loop through pushing each letter the averageNum amount of times
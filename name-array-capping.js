// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// My solution:

function capMe(names) {
    const newArr = names.map(name => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase());
    return newArr;
}

// OR

const capMe = (names) => names.map(name => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase());
  
// params: array of names(strings)
// ret: same array but each string capitalized
  
// ex: capMe(['jo', 'nelson', 'jurie']) => ['Jo', 'Nelson', 'Jurie']
// ex: capMe(['KARLY', 'DANIEL', 'KELSEY']) => ['Karly', 'Daniel', 'Kelsey']
  
// create newArr
// iterate each string within the array
// uppercase first letter, and lowercase the rest then push to newArr
  
  
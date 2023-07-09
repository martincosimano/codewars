// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

// Note: The output array should be sorted alphabetically by key name.

// My solution:
function convertHashToArray(hash){
    const entries = Object.entries(hash);
    return entries.sort();
}
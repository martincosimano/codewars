// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My solution
function abbrevName(name){
    let splittedName = name.split(' ')
    let firstName = splittedName[0]
    let lastName = splittedName[1]
    return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase()
}
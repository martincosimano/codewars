// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 

// Complete the function initials.

// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

// My solution:
function initials(name){
    let splittedName = name.split(' ');
    let result = [];
    for(let i=0; i < splittedName.length; i++) {
      if(i !== splittedName.length -1) {
        result.push(splittedName[i][0].toUpperCase() + '.');
      }else {
        result.push(splittedName[i][0].toUpperCase() + splittedName[i].slice(1));
      }
    }
    return result.join('');
  }
  
  // params: string of words
  // ret: initials of words, and return the complete last word
  
  // ex: initials('joHN aNthoNY fRUsciante') = 'J.A.Frusciante'
  // ex: initials('leOn noeL') = 'L.Noel'
  
  // create a variable for the splitted the string
  // create a variable 'result' to hold the return
  // loop through
  // grab the first letter and the entire last word
  // return the initials uppercased and the last word capitalized
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).
// Examples

// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// My solution:
function initializeNames(name){
    name = name.split(' ');
    const abreviatedNames = name.map((string, i) => name.indexOf(string) === 0 || name.indexOf(string) === name.length -1 ? string : string.slice(0,1) + '.');  
    return abreviatedNames.join(' ');
}
  
  // input: "name" as an string containing names
  // return: string and if the name has middle names, return their initials
  
  // ex: initializeNames('Jack Ryan') => 'Jack Ryan'
  // ex: initializeNames('Lois Mary Lane') => 'Lois M. Lane'
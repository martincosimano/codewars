// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.

// My solution:
function trim(str, size) {
    const slicedStr = str.slice(0, size);
    if(str === slicedStr) {
      return str;
    }else if(str.length > size && size > 3) {
      return slicedStr.slice(0, -3) + "...";
    }else {
      return slicedStr + "...";
    }
  }
  
  /*
  params: "str" as an string, and "size" as a number representing the maximum string length
  ret: return "str" up to "size" length with "..." at the end. 
       if the string is smaller or equal than "size", return the string with no trimming or dots
       if "str" length is smaller than or equal to 3, then the length of the dots is not added to the string length
  
  ex:
  trim("Creating kata is fun", 14) => "Creating ka..."
  trim("Code Wars is pretty rad", 50) => "Code Wars is pretty rad"
  
  create a variable "slicedStr" to hold the sliced "str" value
  compare if sliced === to str
  if equal, return string
  else, check if str length is smaller than size and size is greater than 3. If so, return slicedStr, counting "..." as length
  else return slicedStr with "..." at the end
  */
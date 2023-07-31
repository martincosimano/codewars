// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// My solution:
function removeUrlAnchor(url){
    return url.includes("#") ? url.slice(0, url.indexOf("#")) : url;
}
  
//  params: string url
//  return: same url string, with anything after "#" removed
  
//  ex: removeUrlAnchor("www.codewars.com#about") --> "www.codewars.com"
//  ex: removeUrlAnchor("www.codewars.com?page=1") --> "www.codewars.com?page=1"
  
//  check if there's a "#" in the string
//  if that's true, then get its index number and do a slice from 0 to that number
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// My solution:

function nerdify(txt){
    const regExA = /['a']/gi;
    const regExE = /['e']/gi;
    const regExL = /['l']/g;
    return txt.replaceAll(regExA, 4).replaceAll(regExE, 3).replaceAll(regExL, 1);
}
  
// params: string of letters
// ret: same string replacing:
//                     a/A with "4"
//                     e/E with "3"
//                     l with "1"
  
// ex: nerdify("Fundamentals") => "Fund4m3nt41s"
  
// create 3 regex for each replacement
// then replace
// and return the string
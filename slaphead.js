// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

// My solution:
function bald(head){
    const hairs = head.split('').filter(head => head === '/');
    const remainder = head.replaceAll('/', '-');
    switch(hairs.length) {
        case 0: return [remainder, 'Clean!'];
        case 1: return [remainder, 'Unicorn!'];
        case 2: return [remainder, 'Homer!'];
        case 3: return [remainder, 'Careless!'];
        case 4: return [remainder, 'Careless!'];
        case 5: return [remainder, 'Careless!'];
        default: return [remainder, 'Hobo!'];
    }
}

// function bald(head){
//     const hairs = head.split('').filter(head => head === '/');
//     const remainder = head.replaceAll('/', '-');
//     if(hairs.length === 0) {
//       return [remainder, 'Clean!'];
//     }else if(hairs.length === 1) {
//       return [remainder, 'Unicorn!'];
//     }else if(hairs.length === 2) {
//       return [remainder, 'Homer!'];
//     }else if(hairs.length > 2 && hairs.length < 6) {
//       return [remainder, 'Careless!'];
//     } else {
//       return [remainder, 'Hobo!'];
//     }    
// }
  // params: string with '-' and '/'
  // return: array with the initial string replacing '/' with '-' and the following string:
  //  0 hairs --> "Clean!"
  //  1 hair --> "Unicorn!"
  //  2 hairs --> "Homer!"
  //  3-5 hairs --> "Careless!"
  //  >5 hairs --> "Hobo!"
  
  // ex: bald('/---/-/-/') = 'Careless!'
  // ex: bald('-/--/----') = 'Homer!'
  
  // create a constant called 'hairs' and use filter to remove all the '-' from the string
  // create a constant called 'remainder' replacing all the '/' with '-'
  // then count the length of the hairs and do an else if statement to decide what's the result
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
// Notes

//     If the array is null/nil/None or empty you should return empty array ([]).
//     The rotten fruit name will be in this camelcase (rottenFruit).
//     The returned array should be in lowercase.

// My solution:
function removeRotten(bagOfFruits){
  if(bagOfFruits) {
    const freshFruits = bagOfFruits.map((fruit) => fruit.replaceAll('rotten', '').toLowerCase());
    return freshFruits;
  }else {
    return [];
  }
}

// params: array of strings which has fruit names and some are rotten. Can be empty.
// ret: array of strings, replacing the rotten fruits with fresh ones. If is null/empty, return [].

//ex:
//  removeRotten([apple, rottenBanana, peach]) = [apple, banana, peach]
//  removeRotten([banana, orange, rottenOrange, peach, rottenOrange]) = [banana, orange, orange, peach, orange]

// create a variable 'freshFruits'.
// if bagOfFruits is false, return an empty array. Else, continue.
// map through and replace the rotten fruits with fresh ones.
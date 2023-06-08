// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// My solution:
function insertDash(num) {
    let arrayNum = num.toString().split('');
    for(let i=0; i < arrayNum.length -1; i++) {
      if(Number(arrayNum[i]) % 2 !== 0 && Number(arrayNum[i+1]) % 2 !== 0) {
        arrayNum.splice(i + 1, 0, '-');
        i++;
      }
    }
    return arrayNum.join('');
}
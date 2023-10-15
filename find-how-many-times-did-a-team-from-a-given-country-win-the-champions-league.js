// Create a function that takes two arguments:

//     An array of objects which feature the season, the team and the country of the Champions League winner.

//     Country (as a string, for example, 'Portugal')

// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

// For example if the input array is as follows:

// countWins(winnerList1, 'Spain') => should return 2
// countWins(winnerList1, 'Portugal') => should return 1
// countWins(winnerList1, 'Sportland') => should return 0

// My solution:

function countWins(winnerList, country) {
    let count = 0;
    for(let i=0; i < winnerList.length; i++) {
      if(winnerList[i].country === country) {
        count++;
      }
    }
    return count;
  }
  
  /*
  params: 
    "winnerList" as an object with the teams data.
    "country" as a string.
  ret: how many times did a team from a given country has won.
  
  create varible "count" as a 0.
  loop through the object "winnerList" and add 1 to "count" everytime a team from "country" won.
  return "count".
  */
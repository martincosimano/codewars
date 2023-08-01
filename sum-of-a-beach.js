// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
// Examples

// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
// sumOfABeach("cItYTowNcARShoW")               ==>  0

// My solution:
function sumOfABeach(beach) {
    let count = 0;
    beach = beach.toLowerCase();
    let words = ["sand", "water", "fish", "sun"];
    for (let i = 0; i < 4; i++) {
        while (beach.includes(words[i])) {
            beach = beach.replace(words[i], '');
            count++;
        }
    }
    return count;
}

// params: string
// ret: number of times that the words "Sand", "Water", "Fish" and "Sun" appears.

// sumOfABeach("WAtErSlIde") => 1
// sumOfABeach("cItYTowNcARShoW") => 0
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN") => 3

// create a count variable, that will keep track the number of times the words appear
// loop through the string
// check if the word appears in the string, then will sum 1 to count
// return count
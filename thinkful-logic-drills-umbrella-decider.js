// Write a function take_umbrella() that takes two arguments: a string representing the current weather and a float representing the chance of rain today.

// Your function should return True or False based on the following criteria.

//     You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
//     You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.

// The options for the current weather are sunny, cloudy, and rainy.

// For example, take_umbrella('sunny', 0.40) should return False.

// As an additional challenge, consider solving this kata using only logical operaters and not using any if statements.

// My solution:
function takeUmbrella(weather, chance) {
    return weather === "rainy" || weather === "cloudy" && chance > 0.2 || chance > 0.5;
}
  
/*
params: "weather" as an string representing the current weather, and "chance" as a float, representing the chance of rain today
ret: true if weather === "rainy" || weather === "cloudy" && chance > 0.20 || chance > 0.50
  
ex: 
takeUmbrella('sunny', 0.4), false
takeUmbrella('rainy', 0), true
takeUmbrella('cloudy', 0.2), false
*/
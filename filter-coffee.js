// You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

// My solution:
function search(budget, prices) {
    const newArr = prices.filter((price) => price <= budget);
    return String(newArr.sort((a, b) => a - b));
}
  
// params: "budget" as an integer. "prices" as an array of integers
// ret: an integer string sorted in ascending order representing the coffees within the budget argument
  
// ex: search(3, [6, 1, 2, 9, 2]), "1,2,2"
// ex: search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14"
  
// filter the prices array, getting all numbers equal or less than the budget number
// then we need to sort the array
// return it as an string
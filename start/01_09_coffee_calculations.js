// Write your code here
const PRICE_PER_COFFEE = 1.25;
const coffeeArray = [2, 3, 1, 5];

function getTotal(arr) {
  let total = arr.reduce((totalCoffees, numCoffee) => {
    return totalCoffees += numCoffee
  })
  return `The total bill is $${total*PRICE_PER_COFFEE}`
}

console.log(getTotal(coffeeArray));

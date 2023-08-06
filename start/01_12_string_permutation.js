// Write your code here
function factorial(word) {
  if (word.length === 0) {
    return 1;
  }

  return word.length * factorial(word.slice(1))

}

console.log(factorial("Singed"));
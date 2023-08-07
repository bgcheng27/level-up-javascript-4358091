// Write your code here
function passwordStrength(password) {
  let lower = password.match(/[a-z]/g);
  let capital = password.match(/[A-Z]/g);
  let digit = password.match(/[0-9]/g);
  let special = password.match(/[!@#\$%\^&\*\-().,\/\\{}\+`'";:~<>]/g);
  let long = password.length >= 8;

  return lower && capital && digit && special && long ? "Your password is valid" : "Your password is Invalid"
}

console.log(passwordStrength("trollP7$"))

// Feedback: positive look ahead. 0 width assertion. 
// only returns if match or no match; does not consume whole string

// . => match any character except line break
// + => quantifier; ensures there are one or more of that character

// /(?=.+[a-z])/
// /(?=.+[A-Z])/
// /(?=.+[0-9])/
// /(?=.+[!@#$%^&*])/
// /(?=.{8,})/
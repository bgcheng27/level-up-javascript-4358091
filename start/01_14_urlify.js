// Write your code here
function urlify(string) {
  let urlString = string.replace(/[!@#\$%\^&\*\-().,\/\\{}\+`'";:~<>]/g, "");
  let finalString = urlString.toLowerCase().trim().replace(/\s+/g, "-");
  return finalString;
}

console.log(urlify("--3! 420 4 CacaRrot m@gic inda-err#!#@4askdfj"));
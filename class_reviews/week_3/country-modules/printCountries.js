// The "require" function will return the value assigned to
// "module.exports" in the file given as the path argument
// We do not need to append the ".js" file extension, Node knows
// that it's a JS script
const countries = require("./countries")

countries.forEach(country => {
  console.log(country, country.length)
})

// console.log(module.exports) // module.exports is originally an empty object {}

// Assign any value to "module.exports" to make it available to
// other JS files in your Node project 
// Reassigning module.exports creates a module

const countries = [
  "India",
  "Nepal",
  "Japan",
  "Pakistan",
  "South Korea",
  "South Africa",
  "Canada",
  "Argentina",
  "Australia",
  "Germany",
]

// To access the countries array from another file, we would 
// use the "require" function like this:
// const countries = require("path/to/countries")
module.exports = countries

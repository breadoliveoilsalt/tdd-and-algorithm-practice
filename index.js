// This does not work: require './algos/testAlgo.js'


// REMEMBER TO REQUIRE OTHER FILES, EG - let firstTest = require("./myFirstTests.js")

console.log("I'm index.js!!")

module.exports = {
  addFiveTo: require('./algos/testAlgo').addFiveTo,
}

// This does not work: require './algos/testAlgo.js'


// REMEMBER TO REQUIRE OTHER FILES, EG - let firstTest = require("./myFirstTests.js")


module.exports = {
  addFiveTo: require('./algos/testAlgo').addFiveTo,
}

// This does not work: require './algos/testAlgo.js'


// REMEMBER TO REQUIRE OTHER FILES, EG - let firstTest = require("./myFirstTests.js")
function addFiveTo(num) {
  return 5 + num
}

module.exports = {
  addFiveTo: addFiveTo,
}

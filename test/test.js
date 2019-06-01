
// var assert = require('assert')
var chai = require('chai')
var assert = require('chai').assert
var expect = chai.expect
var should = chai.should()


// REMEMBER TO REQUIRE OTHER FILES, EG - let firstTest = require("./myFirstTests.js")
function addFiveTo(num) {
  return 5 + num
}

describe("Test", function(){
  describe("Testing #addFiveTo()", function(){
    it("should return a number equal to five plus the argument passed to the function",
    function(){
      assert.equal(addFiveTo(7), 12)
      assert.equal(addFiveTo(0), 5)
      assert.equal(addFiveTo(-10), -5)
    })
  })
})

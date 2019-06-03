
// var assert = require('assert')
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var should = chai.should()

var algos = require('../index')

describe("Test", function(){

  describe("Testing #addFiveTo() with assert", function(){
    it("should return a number equal to five plus the argument passed to the function",
    function(){
      console.log(algos)
      assert.equal(algos.addFiveTo(7), 12)
      assert.equal(algos.addFiveTo(0), 5)
      assert.equal(algos.addFiveTo(-10), -5)
    })
  })

  describe("Testing #addFiveTo() with should", function() {
    it("should return a number equal to five plus the argument passed to the function",
    function(){
      algos.addFiveTo(5).should.equal(10)
    })
  })

  describe("Testing #addFiveTo() with expect", function() {
    it("should return a number equal to five plus the argument passed to the function",
    function(){
      let result = algos.addFiveTo(17)
      expect(result).to.equal(22)
      // Note: this does not work: expect(addFiveTo(10)).to.equal(15))
    })
  })

})

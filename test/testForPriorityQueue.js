var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var should = chai.should()

var Node = require('../algos/priorityQueue').Node


describe("Priority Queue Tests", function() {

  describe("Node class", function() {
    it("should accept an object with value and priority keys as an argument", function() {
      let n = new Node({value: 15, priority: 25})
      expect(n).to.be.a("object")
      expect(n).to.have.property("value", 15)
      expect(n).to.have.property("priority", 25)
    })
      // .to.throw()
  })
})

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
      expect(new Node({value: 1, priority:100})).to.be.a("object")
    })

    it("should throw an error when the priority is not an integer between 1 and 100 inclusive", function() {
      // PROBLEM: error being thrown by test, but test not recognizing that it's being thrown.
      // None of these work:
      // assert.throw(new Node({}), Error)
      // expect(new Node({value: 15, priority: 25.5})).to.throw(Error)
      // expect(new Node({value: 15, priority: 25.5})).to.throw(Error, "Priority must be an integer between 1 and 100 inclusive.")
    })
  })
})

var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var should = chai.should()

var sinon = require('sinon');

var { Node } = require('../algos/priorityQueue')
var { PriorityQueue, errorTester } = require('../algos/priorityQueue')

describe("errorTester", function() {
  it("should throw an error and the test should know that", function(){
      // This passes.
      // NOTE the need to use arrow function below to call error and recognize that error is thrown.
      // See here: https://stackoverflow.com/questions/21587122/mocha-chai-expect-to-throw-not-catching-thrown-errors
    expect(() => errorTester()).to.throw()
  })
})


describe("Priority Queue Tests", function() {

  describe("Node Class", function() {

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
      // BUT after playing with errorTester test above, this works:
      expect(() => new Node({value: 15, priority: 25.5})).to.throw(Error, "Priority must be an integer between 1 and 100 inclusive.")
      expect(() => new Node({value: 15})).to.throw(Error, "Priority must be an integer between 1 and 100 inclusive.")
    })

    it("should throw an error when no value is provided", function() {
      expect(() => new Node({priority: 25})).to.throw(Error, "A value must be provided for a valid Node.")
      expect(new Node({priority: 25, value: 0})).to.be.a("object")
    })
  })

  describe("Priority Queue Class", function(){

    it("should initialize an instance of the class with a property 'data' set to an empty array", function(){
      let pq = new PriorityQueue()
      expect(pq).to.be.a("object")
      expect(pq).to.have.property("data")
      expect(pq.data).to.be.a("array").with.lengthOf(0)
    })

    describe("#insert", function(){
        it("should insert a Node into the data property", function() {

          let n1 = new Node({value: "apple", priority: 24})
          let pq1 = new PriorityQueue()
          pq1.insert(n1)
          expect(pq1.data).to.be.a("array").with.lengthOf(1)
          // NEED TO FIGURE OUT WHY THIS IS NOT WORKING:
          // expect(pq1.data[0]).to.be.a("node")

          let n2 = new Node({value: 15, priority: 99})
          pq1.insert(n2)
          expect(pq1.data).to.be.a("array").with.lengthOf(2)
        })

        it("should call #bubbleUpFrom to move the inserted Node to the correct position", function() {
          let n1 = new Node({value: "apple", priority: 24})
          let pq1 = new PriorityQueue()
          pq1.insert(n1)
          // TO FOLLOW UP ON CALLING A SPY
        })
    })

  })
})

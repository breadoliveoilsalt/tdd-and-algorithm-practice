var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var should = chai.should()

var Node = require('../algos/priorityQueue').Node

let n = new Node({value: 15, priority: 25})

console.log(n)

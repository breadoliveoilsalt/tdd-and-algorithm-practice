

// Note that this is intentionally a maxheap structure. Some advocate for minheap.
// for testing at the node console: let {Node} = require('./algos/priorityQueue')

class Node {

  constructor(attributes) {
    this.checkValidPriority(attributes.priority),
    this.checkValidValue(attributes.value),
        // An attempt to have tests recognize that an error is thrown.  Does not work.
        // if (attributes.priority % 1 !== 0 || attributes.priority < 1 || attributes.priority > 100) {
        //   throw new Error("Priority must be an integer between 1 and 100 inclusive.")
        // }
    this.priority = attributes.priority,
    this.value = attributes.value
  }

  checkValidPriority(priority) {
    if (priority % 1 !== 0 || priority < 1 || priority > 100) {
      throw new Error("Priority must be an integer between 1 and 100 inclusive.")
    }
  }

  checkValidValue(value) {
    if (value === null || value === undefined) {
      throw new Error("A value must be provided for a valid Node.")
    }
  }

}


class PriorityQueue {

  constructor() {
    this.data = []
  }

  insert(node) {
    this.checkValidNode(node)
    this.data.push(node)
  }

  checkValidNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("Input is not a valid node.")
    }
  }

}

function errorTester() {
  throw new Error("You got an error, bro!")
}

module.exports = {
  Node: Node,
  PriorityQueue: PriorityQueue,
  errorTester: errorTester
}

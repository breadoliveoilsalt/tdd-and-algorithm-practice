

// Note that this is intentionally a maxheap structure. Some advocate for minheap.

class Node {

  constructor(attributes) {
    this.checkValidPriority(attributes.priority),
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

}


class PriorityQueue {

  constructor() {
    this.data = []
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

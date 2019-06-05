

class Node {

  constructor(attributes) {
    this.checkValidPriority(attributes.priority),
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

  
}

module.exports = {
  Node: Node
}

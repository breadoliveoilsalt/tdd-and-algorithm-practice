

// Note that this is intentionally a maxheap structure. Some advocate for minheap.
// for testing at the node console: let {Node} = require('./algos/priorityQueue')
// It assumes the number with the highest priority should be at the top and go first.

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
    this.data = [null]
  }

  insert(node) {
    this.checkValidNode(node)
    this.data.push(node)
    debugger
    this.bubbleUpFrom(this.data.length - 1)
  }

  checkValidNode(node) {
    if (!(node instanceof Node)) {
      throw new Error("Input is not a valid node.")
    }
  }

  bubbleUpFrom(currentNodeIndex) {

    if (currentNodeIndex <= 1) {
      return
    }

    let currentNode = this.data[currentNodeIndex]

    let parentNodeIndex = this.getParentIndexOf(currentNodeIndex)
    let parentNode = this.data[parentNodeIndex]

    while (currentNode.priority > parentNode.priority && currentNodeIndex > 1) {

      this.swap(parentNodeIndex, currentNodeIndex)
      if (parentNodeIndex <= 1) {
        break
      } else {
      currentNodeIndex = parentNodeIndex
      currentNode = this.data[currentNodeIndex]
      parentNodeIndex = this.getParentIndexOf(currentNodeIndex)
      parentNode = this.data[parentNodeIndex]
      }
    }
  }

  extractTopPriority() {
    const topPriority = this.data[1]
    this.data[1] = this.data.pop()
    this.bubbleDownFrom(1)
    return topPriority
  }

  bubbleDownFrom(index) {
    return
  }


  // bubbleDownFrom(index) {
  //     // some sources say swap with left child before right; some say swap with larger child; some say swap with lesser child.
  //     // Must pick smaller one so smaller one is at the root (and every sub root)
  //
  //
  //     while (true) {
  //
  //       let current = this.data[index]
  //       let leftChild = this.data[this.getLeftChildIndexOf(index)]
  //       let rightChild = this.data[this.getRightChildIndexOf(index)]
  //
  //       debugger
  //
  //       if (this.isLeafNode(index)){
  //         break
  //       }
  //
  //       if (current <= leftChild && current <= rightChild) {
  //         break
  //       }
  //
  //       // Swap with the lesser child -- this way the parent of any sub-tree is always the minimum of that tree
  //       if (leftChild < rightChild || rightChild === undefined) {
  //           // Note: I only added the || above after some testing. Not sure if more rigorous conditions needed here.
  //         this.swap(index, this.getLeftChildIndexOf(index))
  //         index = this.getLeftChildIndexOf(index)
  //       } else {
  //         this.swap(index, this.getRightChildIndexOf(index))
  //         index = this.getRightChildIndexOf(index)
  //       }
  //     }
  //   }


// Not really working either - this doesn't work b/c we get stuck in the while
// loop, even when the recursive call returns. Still need a check for parentIndex
// being 1.
  // bubbleUpFrom(currentNodeIndex) {
  //
  //   if (currentNodeIndex <= 1) {
  //     return
  //   }
  //
  //   console.log("Start, currentNodeIndex:", currentNodeIndex)
  //   let currentNode = this.data[currentNodeIndex]
  //   let parentNodeIndex = this.getParentIndexOf(currentNodeIndex)
  //   let parentNode = this.data[parentNodeIndex]
  //
  //   while (currentNode.priority > parentNode.priority) {
  //     this.swap(currentNodeIndex, parentNodeIndex)
  //     this.bubbleUpFrom(parentNodeIndex)
  //     console.log("While loop, parentNodeIndex:", parentNodeIndex)
  //   }
  //
  //   return
  //
  // }

// This keeps getting errors when parentIndex becomes null and the while loop tries to read it:
  // bubbleUpFrom(currentNodeIndex) {
  //
  //   if (currentNodeIndex <= 1) {
  //     return
  //   }
  //
  //   let currentNode = this.data[currentNodeIndex]
  //
  //   let parentNodeIndex = this.getParentIndexOf(currentNodeIndex)
  //   let parentNode = this.data[parentNodeIndex]
  //
  //   debugger
  //
  //   while (currentNode.priority > parentNode.priority && currentNodeIndex > 1) {
  //
  //     debugger
  //     this.swap(currentNodeIndex, parentNodeIndex)
  //     currentNodeIndex = parentNodeIndex
  //     currentNode = this.data[currentNodeIndex]
  //     parentNodeIndex = this.getParentIndexOf(currentNodeIndex)
  //     parentNode = this.data[parentNodeIndex]
  //   }
  // }

  getParentIndexOf(index) {
    return Math.floor(index/2)
  }

  getLeftChildIndexOf(index) {
    return index * 2
  }

  getRightChildIndexOf(index) {
    return (index * 2) + 1
  }

  isLeafNode(index) {
    return index >= this.data.length/2 // Note: no need for Math.floor!
  }

  swap(firstIndex, secondIndex) {
    let temp = this.data[firstIndex]
    this.data[firstIndex] = this.data[secondIndex]
    this.data[secondIndex] = temp
  }

}

function errorTester() {
  throw new Error("You got an error, bro!")
}

let n1 = new Node({value: "apple", priority: 24})
let n2 = new Node({value: "pear", priority: 100})
let pq = new PriorityQueue()

pq.insert(n1)
pq.insert(n2)
console.log(pq.data)

module.exports = {
  Node: Node,
  PriorityQueue: PriorityQueue,
  errorTester: errorTester
}

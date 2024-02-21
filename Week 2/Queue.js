class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element) 
  }

  dequeue() {
    return this.items.shift() // remove and retutn begining of the element
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  peek() {
    if(!this.isEmpty()) {
      return this.items[0]
    }
    return null
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue
// console.log(queue.isEmpty());
// console.log(queue.size());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

console.log(queue.dequeue());

console.log(queue.peek());
queue.print()

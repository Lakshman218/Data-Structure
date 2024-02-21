  class Queue {
  constructor() {
    this.items = []
    this.rear = 0
    this.front = 0
  }

  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue() {
    if(this.isEmpty()) {
      return null
    }
    const value = this.items[this.front]
    // delete this.items[this.front]
    this.front++
    this.items = this.items.slice(this.front);
    if (this.isEmpty()) {
      this.rear = 0;
      this.front = 0;
    }
    return value
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  size() {
    return this.rear - this.front
  }

  peek() {
    return this.items[this.front]
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue
// console.log(queue.isEmpty());

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()

console.log(queue.dequeue());
queue.print()


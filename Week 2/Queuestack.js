class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {

      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
      }

      let value = this.stack1.pop()
      while(this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop())
      }
      return value
    }
  }


  front() {
    if (this.stack2.length === 0) {

      while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop());
      }

      let value = this.stack1.pop()
      this.stack1.push(value)
      while(this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop())
      }
      return value
    }
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  size() {
    return this.stack1.length + this.stack2.length;
  }
}

const queue = new QueueUsingStack();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front()); 
console.log(queue.dequeue()); 

queue.enqueue(4);

console.log(queue.front()); 
console.log(queue.size());  

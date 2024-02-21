class StackUsingQueue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(value) {
    this.queue1.push(value);
  }

  pop() {
    if (this.queue2.length === 0) {

      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      
     let value = this.queue1.shift()
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
      return value
    }
  }

  top() {
    if (this.queue2.length === 0) {
      if (this.queue1.length === 0) {
        return undefined;
      }

      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
      let value=this.queue1.shift()
      this.queue2.push(value)

      while(this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift())
      }
      return value;
    }
  }

  isEmpty() {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }

  size() {
    return this.queue1.length + this.queue2.length;
  }
}

const stack = new StackUsingQueue();

stack.push(1);
stack.push(2);
stack.push(3);

// console.log(stack.top()); 
// stack.push(4);
console.log(stack.pop()); 

// console.log(stack.size());  

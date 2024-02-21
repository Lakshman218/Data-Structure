class Stack {
  constructor() {
    this.items = []
    // this.top = 0
  }

  push(element) {
    this.items.push(element)  
  }

  pop() {
    this.top--                                         
    const value = this.items.pop()
    return value
  }

  isEmpty() {
    return this.top === 0
  }
  size() {
    // return this.top
    return this.items.length
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }
    return this.items[this.items.length - 1]
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack()
console.log(stack.isEmpty());
console.log(stack.size());

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()

console.log(stack.size());

console.log(stack.pop());
stack.print()
console.log(stack.peek());
console.log(stack.isEmpty());

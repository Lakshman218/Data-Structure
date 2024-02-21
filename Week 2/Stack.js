class Stack {
  constructor() {
    this.items = []
    this.top = 0
  }

  push(element) {
    this.items[this.top] = element
    this.top++
  }

  pop() {
    this.top--                                         
    const value = this.items[this.top]
    this.items = this.items.slice(0, this.top)
    return value
  }

  isEmpty() {
    return this.top === 0
  }
  size() {
    return this.top
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }
    return this.items[this.top - 1]
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

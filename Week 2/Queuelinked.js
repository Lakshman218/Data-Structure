class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class linkedList {
  constructor() { 
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  enqueue(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue() {
    if(this.isEmpty()) {
      return null
    } else {
      let element = this.head
      this.head = this.head.next
      element.next = null
      this.size--
    }
  }

  display() {
    if(this.isEmpty()) {
      console.log("empty");
    } else {
      let str = ''
      let curr = this.head
      while(curr) {
        str += `${curr.value} `
        curr = curr.next
      }
      console.log(str);
    }
  }
}

const list = new linkedList()
list.enqueue(10)
list.enqueue(20) 
list.enqueue(30)
list.dequeue()

list.display() 

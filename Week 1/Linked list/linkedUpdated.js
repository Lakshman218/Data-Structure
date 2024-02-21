class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} 

class linkedlist {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  // prepend
  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  // append
  append(value) {
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
  

  // remove node from front
  removeFromFront(){
    if(this.isEmpty()) {
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }

  // remove node from end
  removeFromEnd () {
    if(this.isEmpty()) {
      return null
    }
    let value = this.tail.value;
    if(this.size === 1) {
      this.head = null  
      this.tail = null
    } else {
      let prev = this.head
      while(prev.next !== this.tail) {
        prev = prev.next
      }
      value = this.tail.value
      prev.next = null
      this.tail = prev
    }
    this.size--
    return value
  }

   // insert value with index
   insert(value, index) {
    if(index < 0 || index > this.size) return -1
     if(index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i<index-1; i++) {    
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
    }
    this.size++
   }

   // delete with index
  removeIndex(index) {
    if(index < 0 || index > this.size) return null
    let removedNode
    if(index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for(let i=0; i<index-1; i++) {
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size-- 
    return removedNode.value
  }

  // delete with value
  removeValue(value) {
    if(this.isEmpty()) return null
    if(this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    } else {
      let prev = this.head
      while(prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if(prev.next) {
        const removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }
      return null
    }
  }

  // reverse
  reverse() {
    if(this.isEmpty()) return null
    let prev = null
    let curr = this.head
    while(curr) {
      let next = curr.next
      curr.next = prev
      prev = curr 
      curr = next
    }
    this.head = prev
  }

  // search
  search(value) {
    if(this.isEmpty()) return -1
    let i = 0 
    let curr = this.head
    while(curr) {
      if(curr.value === value) {
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }

  // finding mid value
  mid() {
    if (this.isEmpty()) return -1;
    const length = this.getSize();
    let midposition = Math.floor(length / 2);
    let curr = this.head;

    if (length % 2 === 0) {
        for (let i = 0; i < midposition - 1; i++) {
            curr = curr.next;
        }
    } else {
        for (let i = 0; i < midposition; i++) {
            curr = curr.next;
        }
    }
    if (curr) {
        let value = curr.value;
        return value;
    }
  }

  mid() {
    if(this.isEmpty()) return null
    let length = this.getSize()
    let midposition = Math.floor(length/2)
    let curr = this.head
    for(let i=0; i<midposition-1; i++) {
      curr = curr.next
    }
    if(length%2 === 0) {
      return  curr.value
    } else {
      return curr.next.value
    }
  }

  toArray() {
    const array = [];
    let curr = this.head;
    while (curr) {
      array.push(curr.value);
      curr = curr.next;
    }
    return array;
  }

  toEnd(value) {
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

  print() {
    if(this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head 
      let listValues = ''
      while(curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues);
    }
  }

}

const list = new linkedlist
console.log("list size ", list.getSize());
list.print()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.append(50)
list.append(60)
list.append(70)
list.print()

list.print()
console.log("Removed value from front", list.removeFromFront());
list.print()
console.log("Removed value from end", list.removeFromEnd());
list.print()

list.insert(40, 3)
list.print()

list.removeIndex(3)
list.print()

list.removeValue(50)
list.print()

list.toEnd(60)
list.print()

// list.reverse()
// list.print()

// console.log("value found at position", list.search(60));

// console.log("list size ", list.getSize());

// console.log("mid element is", list.mid());

function arrayToLinkedList(array) {
  array.forEach(value => list.append(value))
  return list
}
const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
linkedList.print()

const toArray = list.toArray()
console.log(toArray);
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

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

  insert(value, index) {
    if (index < 0 || index > this.size) return -1;

    if (index === 0) {
        this.prepend(value);
    } else if (index === this.size) {
        this.append(value);
    } else {
        const node = new Node(value);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        node.next = current.next;
        node.prev = current;
        current.next.prev = node;
        current.next = node;

        this.size++;
    }
  }

  removeIndex(index) {
    if (index < 0 || index >= this.size) return null;

    let removedNode;

    if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
    } else if (index === this.size - 1) {
        removedNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
    } else {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        removedNode = current;
        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;

    if (this.head.value === value) {
        const removedNode = this.head;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.size--;
        return value;
    } else {
        let current = this.head;

        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            const removedNode = current;  

            if (current.prev) {
                current.prev.next = current.next;
            }

            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev;
            }

            this.size--;
            return value;
        }

        return null;
    }
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.tail;
      let list = "";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.prev;
      }
      console.log(list);
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const list = new DoublyLinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.append(50)
list.append(60)
list.append(70)
list.print()

list.printReverse()

list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()

list.insert(40, 3)
list.print()

list.removeIndex(2)
list.print()

list.removeValue(10)
list.print()

console.log("value found at position", list.search(60));

console.log("list size ", list.getSize());

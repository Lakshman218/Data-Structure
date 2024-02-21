class MinHeap {
  constructor() {
    this.heap = []
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  heapifyUp(index) {
    const parentindex = Math.floor((index-1)/2)
    if(parentindex >= 0 && this.heap[parentindex] > this.heap[index]) {
      this.swap(index, parentindex)
      this.heapifyUp(parentindex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1)
  }

  heapifyDown(index) {
    let leftchildindex = 2 * index + 1;
    let rightchildindex = 2 * index + 2;
    let minindex = index
    if(leftchildindex < this.heap.length && this.heap[leftchildindex] < this.heap[minindex]) {
      minindex = leftchildindex
    }
    if(rightchildindex < this.heap.length && this.heap[rightchildindex] < this.heap[minindex]) {
      minindex = rightchildindex
    }
    if(minindex !== index) {
      this.swap(index, minindex)
      this.heapifyDown(minindex)
    }
  }
  
  remove() {
    if(this.heap.length === -1) {
      return null
    }
    if(this.heap.length === 1) {
     return this.heap.pop()
    } else {
      const min = this.heap[0]
      this.heap[0] = this.heap.pop()
      this.heapifyDown(0)
      return min
    }
  }

  heapsort() {
    const sortedarr = []
    while(this.heap.length > 0) {
      sortedarr.push(this.remove())
    }
    return sortedarr  
  }

  buildHeapFromArray(array) {
    this.heap = array
    const firstNonLeafIndex  = Math.floor((array.length-2)/2)
    for(let i=firstNonLeafIndex; i>=0; i--) {
      this.heapifyDown(i)
    }
  }
}

const minheap = new MinHeap()
minheap.insert(8)
minheap.insert(5)
minheap.insert(3)
minheap.insert(15)
minheap.insert(2)
minheap.insert(20)
minheap.insert(4)
  
// minheap.buildHeapFromArray([3, 7, 2, 1, 9, 8])
  
// console.log(minheap.heap);

// minheap.remove()
console.log(minheap.heap); 
// console.log(minheap.heapsort());

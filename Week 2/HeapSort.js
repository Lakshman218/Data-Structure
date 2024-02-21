class MinHeap {
  constructor() {
    this.heap = []
  }

  swap(index1, index2) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
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

  heapsort() {
    const sortedarr = []
    while(this.heap.length > 0) {
      sortedarr.push(this.remove())
    }
    return sortedarr
  }

  remove() {
    if(this.heap.length === -1) {
      return null
    }
    if(this.heap.length === 1) {
      return this.heap.pop()
    }
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return min
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

minheap.buildHeapFromArray([3, 7, 2, 1, 9, 8])

console.log(minheap.heapsort());

// console.log(minheap.heap);
// bubble sort : B(O) : O(n^2) nested loop   
function bubbleSort(arr) {
  do {
    swapped = false
    for(let i=0; i<arr.length-1; i++) {
      if(arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
}


// Insertion sort : B(O)  :  O(n^2)
function insertionSort(arr) {
  for(let i=0; i<arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > numberToInsert) {
      arr[j+1] = arr[j]
      j = j-1
    }
    arr[j+1] = numberToInsert
  }
}

// quick sort : B(O)  :  
// worst case: O(n^2)
// average case : O(nlogn) 
function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length-1]
  let left = []
  let right = []
  for(let i=0; i<arr.length-1; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

// merge sort : O(nlogn)
function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length/2)
  const leftarr = arr.slice(0,mid)
  const rightarr = arr.slice(mid)
  return merge(mergeSort(leftarr), mergeSort(rightarr))
}

function merge(leftarr, rightarr) {
  const sortedarr = []
  while(leftarr.length && rightarr.length) {
    if(leftarr[0] <= rightarr[0]) {
      sortedarr.push(leftarr.shift())
    } else {
      sortedarr.push(rightarr.shift())
    }
  }
  return [...sortedarr, ...leftarr, ...rightarr]
}



// selectioin sort B(O) : O(n^2)
function selectionSort(arr) {
  const n = arr.length
  for(let i=0; i<n; i++) {
    let minIndex = i

    for(let j=i+1; j<n; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] 
    }
  }
  return arr
}


const arr = [7,4,2,8,6]
console.log("Before sorting",arr);


// bubbleSort(arr)
// insertionSort(arr)

// console.log(quickSort(arr));
// console.log(mergeSort(arr));
console.log("After sorting",selectionSort(arr));

// console.log("After sorting",arr);


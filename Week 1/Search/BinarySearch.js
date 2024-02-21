// binary search : O(log n)
function binary(arr, x) {
  let start = 0 , end = arr.length-1;
  while(start <= end) {
    let mid = Math.floor((start+end) / 2);
    if (arr[mid] === x) {
      return mid; 
    }
    if (arr[mid] < x) {
      start = mid+1;
    } else {
      end = mid-1
    }
  }
  return -1;
}
// console.log("Element fount at position",binary([-5,2,4,6,8,10],8))

// binary recursion : O(log n)
function binaryRecursive (arr, x, start = 0, end = arr.length-1) {
  if(start > end) return -1;
  let mid = Math.floor((start+end)/2);
  if(arr[mid] === x) return mid;
  if (arr[mid] < x) {
    return binaryRecursive(arr, x, start = mid+1, end)
  } else {
    return binaryRecursive(arr, x, start, end = mid-1)
  }
}
console.log("Element fount at position",binaryRecursive([-5,2,4,6,8,10],4))
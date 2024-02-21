// linear search : O(n)
function linear(arr, x) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === x) {
      return i;
    }
  }
  return  -1
}
// console.log("Element fount at position",linear([-5,2,8,5,4,10], 10))

// linearRecursive: O(n)
function linearRecursive(arr, x, index = 0) {
 if(index >= arr.length) {
   return -1;
 }
 if(arr[index] === x) {
   return index;
 }
 return linearRecursive(arr, x, index + 1);
}
console.log("Element fount at position",linearRecursive([-5,2,8,5,4,10], 10));
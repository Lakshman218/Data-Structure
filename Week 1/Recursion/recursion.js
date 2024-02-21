// factorial : o(n)
function factorial (n) {
  let sum = 1;
  for(let i = 2; i<=n; i++) {
    sum = sum * i
  }
  return sum
}
// factorial recursion : o(n)
function factorial(n) {
  if(n === 0 || n=== 1) {
    return 1
  } else {
    return n * factorial(n-1)
  }
} 
console.log(factorial(5));


// fibonacci : o(n)
function fibonacci(n) {
 let fibo = [0,1];
  for (let i=2; i<n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2]
  }
  return fibo;
}

// fibonacci using recursion : o(2^n)
function fibonacci (n) {
  if(n < 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6))


// sum 
function sum (n) {
  let total = 0
  if(n>0) {
    for(let i=0; i<=n; i++) {
      total += i
    }
    return total
  }
}
// sum using recursion
function sum(n) {
  if (n === 0) {
      return 0;
  } else {
      return n + sum(n - 1);
  }
}
console.log(sum(5));


// power
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
      result *= base;
  }
  return result;
}

function power(base, exponent) {
  if (exponent === 0) { 
      return 1;
  } else {
      return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));


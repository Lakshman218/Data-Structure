const findCharIndex = (str, char) => {
  for(let i=0; i<str.length; i++) {
    if(str[i] === char) {
      return i
    }
  }
  return -1
}

const concatenateStrings = (str1, str2) => {
  return str1 + str2;
}

const reverseString = (str) => {
  let reversed = ""
  for(let i = str.length-1; i>=0; i--) {
    reversed += str[i]
  }
  return reversed
}

const isPalindrome  = (string) => {
  let reversed = reverseString(string)
  return reversed === string
}

const LowerCase = (str) => {
  let lowercase = ''
  for(let i=0; i<str.length; i++) {
    lowercase += str[i].toLowerCase()
  } 
  return lowercase
}

const UpperCase = (str) => {
  let uppercase = ''
  for(let i=0; i<str.length; i++) {
    uppercase += str[i].toUpperCase() 
  }
  return uppercase
}   

const countOccurrences = (word) => {
  let charCount = new Map()
  for(let char of word) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }
  return charCount
}


let myString = "Hello World"
console.log(findCharIndex(myString, "W"))

console.log((countOccurrences("hello")));

console.log(concatenateStrings("hello ", "world"));
console.log(reverseString("hello world"));
console.log(isPalindrome("malayalam"));
console.log(LowerCase("Hello"));
console.log(UpperCase("Hello"));
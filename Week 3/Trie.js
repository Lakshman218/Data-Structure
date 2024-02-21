  class Node {
    constructor() {
      this.children = {}
      this.isWordEnd = false
    }
  }

  class Trie {
    constructor() {
      this.root = new Node()
    }

    insert(word) {
      let node = this.root
      for(const char of word) {
        if(!node.children[char]) {
          node.children[char] = new Node()
        }
        node = node.children[char]
      }
      node.isWordEnd = true
    }

    search(word) {  
      let node = this.root
      for(const char of word) {
        if(!node.children[char]) {
          return false  
        }
        node = node.children[char]
      }
      return node.isWordEnd
    }

    prefix(word) {
      let node = this.root
      for(let char of word) {
        if(!node.children[char]) {
          return false
        }
        node = node.children[char]
      }
      return true
    }
    
  }

  const trie = new Trie()

  trie.insert("apple")
  trie.insert("application");
  trie.insert("banana");

  console.log(trie.search("apple"));

  // console.log(trie.search("apple"));

  // console.log(trie.prefix("app"));
 

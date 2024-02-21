class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

function preorderTraversal(root) {
  if(root) {
    console.log(root.value);
    preorderTraversal(root.left);  
    preorderTraversal(root.right); 
  }
}

function inorderTraversal(root) {
  if(root) {
    inorderTraversal(root.left);   
    console.log(root.value);
    inorderTraversal(root.right); 
  }
}

function postorderTraversal(root) {
  if(root) {
    postorderTraversal(root.left);  
    postorderTraversal(root.right);  
    console.log(root.value);
  }
}

// console.log("Preorder:");
// preorderTraversal(root);
// console.log("Inorder:");
// inorderTraversal(root);
console.log("Postorder:");
postorderTraversal(root);

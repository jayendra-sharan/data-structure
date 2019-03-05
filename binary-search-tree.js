/**
 * @description constructor function for creating a node.
 */
function Node (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/**
 * @description constructor function to maintain a BST and provide,
 * methods for basic operations.
 */
function BST () {
  this.root = null;
}

/**
 * @description function to add a root node.
 * @param {Node} node to be added as a root node.
 */
BST.prototype.addRootNode = function (node) {
  this.root = node;
}

/**
 * @description function to insert a node in BST.
 * @param {Number} value to be stored in the node.
 */
BST.prototype.insertNode = function (value) {
  // create a new node
  var newNode = new Node (value);

  // if root is empty, add the new node as root node.
  if (!this.root) {
    this.addRootNode (newNode);
  } else {
    var parentNode = null,          // keeps track of parent of the current node.
        currentNode = this.root;

    // traverse in the left/right direction based on following condition:
    // if new node's value is less than current node's value, go left
    // else, go right,
    // till the current node hits a null reference.
    while (currentNode) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    // when current node is null, the parent node is one level up.
    // compare the node's value with given value.
    // add to left if given node's value is less,
    // else add to right.
    if (value < parentNode.value) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }
}

/**
 * @description function for inorder traversal.
 */
BST.prototype.inorder = function () {
  inorderWalk (this.root);
}

/**
 * @description function for pre order traversal.
 */
BST.prototype.preorder = function () {
  preorderWalk (this.root);
}

/**
 * @description function for post order traversal.
 */
BST.prototype.postorder = function () {
  postorderWalk (this.root);
}

/**
 * @description function to perform in order walk.
 * @param {Node} node start node
 */
function inorderWalk (node) {
  if (node) {
    inorderWalk (node.left);
    console.log (node.value);
    inorderWalk (node.right);
  }
}

/**
 * @description function to perform pre order walk.
 * @param {Node} node start node
 */
function preorderWalk (node) {
  if (node) {
    console.log (node.value);
    preorderWalk (node.left);
    preorderWalk (node.right);
  }
}

/**
 * @description function to perform post order walk.
 * @param {Node} node start node
 */
function postorderWalk (node) {
  if (node) {
    postorderWalk (node.left);
    postorderWalk (node.right);
    console.log (node.value);
  }
}

/**
 * @description function to search a value in the BST.
 * @param {Number} value to search
 */
BST.prototype.search = function (value) {
  var root = this.root;
  var result = treeSearch (root, value);
  if (result) {
    console.log ("Match Found!");
  } else {
    console.log ("Match Not Found!");
  }
}

function treeSearch (node, value) {
  if (node.value === value) {
    return 1
  }
  if (value < node.value) {
    return treeSearch (node.left, value)
  } else {
    return treeSearch (node.right, value)
  }
}

// Implementation.
var bst = new BST();
bst.insertNode (10);
bst.insertNode (5);
bst.insertNode (15);
bst.insertNode (2);
bst.insertNode (7);
bst.insertNode (20);
bst.insertNode (12);
bst.insertNode (3);

console.log ("In-order");
bst.inorder();

console.log ("Pre-order");
bst.preorder();

console.log ("Post-order");
bst.postorder();

bst.search (2);
/**
 * @description function to create Nodes.
 */

function Node (data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

 /**
  * @description function to create the doubly linked list.
  */
function LinkedList () {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/**
 * @description function to add head to the linked list.
 * @param {any} data assigned to the head.
 */

LinkedList.prototype.addHead = function (data) {
  var newNode = new Node (data);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    this.length ++;
  } else {
    var currentHead = this.head;
    this.head = newNode;
    // newNode.prev is null

    // connet the new node's next to exisiting head.
    newNode.next = currentHead;

    // connect the existing node's prev to new head. 
    currentHead.prev = this.head;
  }
}

/**
 * @description function to insert a node in the list.
 * @param {any} data to be assigned to the node's value.
 * @param {Number} position where node should be inserted in the list.
 */
LinkedList.prototype.insertAt = function (data, position) {
  var newNode = new Node (data);
  if (position > 0 && position < this.length + 1) {
    if (position === 1) {
      this.addHead (data);
    } else {
      var currentNode = this.head,
          count = 1;
      while (count < position) {
        currentNode = currentNode.next;
        count ++;
      }
      var prevNode = currentNode.prev;

      // insert the new node and set the nexts to align new list forward.
      prevNode.next = newNode;
      newNode.next = currentNode;

      // set the prev of nodes to align the new list backward.
      newNode.prev = prevNode;
      currentNode.prev = newNode;
    }
  } else {
    console.log ("Invalid position.");
  }
}

/**
 * @description function to traverse all nodes of the linked list.
 */
LinkedList.prototype.traverse = function (dir) {
  if (this.length) {
    if (dir) {
      console.log ("Traversing in forward directon.")
      var currentNode = this.head;
      while (currentNode) {
        console.log (currentNode.data);
        currentNode = currentNode.next;
      }
    } else {
      console.log ("Traversing in backward direction.")
      var currentNode = this.tail;
      while (currentNode) {
        console.log (currentNode.data);
        currentNode = currentNode.prev;
      }
    }

  } else {
    console.log ("Linked list is empty.");
  }
}

var dll = new LinkedList ();
dll.addHead (20);
dll.addHead (10);
dll.insertAt (5, 1);
dll.insertAt (5, 3);
dll.traverse (true);
dll.traverse ();


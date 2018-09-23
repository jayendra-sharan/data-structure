/**
 * @description Constructor function to create a node.
 */
 function Node (data) {
   this.data = data;
   this.next = null;
 }

 /**
  * @description Constructor function to create the linked list.
  */
 function LinkedList () {
   this.head = null;
   this.length = 0;
 }

/**
 * @description function to create a node and then add it at the end of the list.
 * @param {any} data to be inserted in the node of the linked list
 */
LinkedList.prototype.insert = function (data) {
  var newNode = new Node (data);

  if (!this.head) {
    this.head = newNode;
  } else {
    var currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  this.length ++;
}

/**
 * @description function to remove a node at given position.
 * @param {Number} position of the node which has to be removed
 */
LinkedList.prototype.removeAt = function (position) {
  if (!this.head) {
    console.log ("Linked List is empty");
  } else {
    var currentNode = this.head,
        prevNode = null,
        nodeToBeDeleted = null,
        nextNode = null,
        count = 1;
    if (position > 0 && position < this.length + 1) {
      if (position === 1) {
        nodeToBeDeleted = this.head;
        this.head = nodeToBeDeleted.next;
      } else {
        while (count < position) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          count++;
        }
        nodeToBeDeleted = currentNode;
        nextNode = currentNode.next;
        prevNode.next = nextNode;
      }
      console.log ("Deleted at: ", position, "data: ", nodeToBeDeleted.data);
      nodeToBeDeleted = null;
      this.length --;
    } else {
      console.log ("Invalid position given.");
    }
  }
}

/**
 * @description function to display all available nodes.
 */
LinkedList.prototype.traverse = function () {
  if (!this.head) {
    console.log ("Linked List is empty.");
  } else {
    var currentNode = this.head;
    while (currentNode) {
      console.log (currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

/**
 * @description function to search a node.
 * @param {any} data that needs to be searched in the list.
 */
LinkedList.prototype.search = function (data) {
  if (!this.head) {
    console.log ("Linked List is empty.");
  } else {
    var currentNode = this.head,
        position = 1;
    while (currentNode) {
      if (data === currentNode.data) {
        console.log ("Match found at: ", position, "data: ", data);
      }
      currentNode = currentNode.next;
      position++;
    }
  }
}

var sll = new LinkedList ();
sll.search (10);
sll.insert (10);
sll.insert (20);
sll.insert (30);
sll.insert (40);
sll.traverse ();
sll.search (10);
sll.search (40);
sll.removeAt (3);
sll.removeAt (3);
sll.removeAt (1);
sll.removeAt (1);
sll.traverse ();
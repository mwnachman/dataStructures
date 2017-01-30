// First we have to create a linked list
// In a separate file I will show how to do this
// in more detail and with its necessary methods.
// For now, I'll create just a segment of a
// linked list to work with.

// When you delete a node from a linked list in 
// CONSTANT TIME, you must be sure that there are
// no references to the node being deleted, because
// it will still exist, just with a different value
// To delete the node, you change the node it points 
// to and change it's value, basically removing
// the node it points to from the linked list instead.
// Since nodes are just their values and their next 
// pointers, the list is the same as long as there were
// no references to the altered node (or the now unused
// next node) that will be affected.


// Create list:
var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.makeNode = function(value) {
  node = {};
  node.value = value;
  node.next = null;
  return node;
};


LinkedList.prototype.addToTail = function(value) {
  var newTail = this.makeNode(value);
  if (!this.head) {
    this.head = newTail;
  } 
  if (this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
  var currentHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return currentHead.value;
};

LinkedList.prototype.contains = function(value) {

};

// Delete node in O(1) time -- (doesn't work if the node is the tail): 
// Also doesn't work with this class because we don't have a way to 
// identify a node without searching for its value;

LinkedList.prototype.deleteNode = function(node) {
  var val = node.next.value;
  node.next = node.next.next;
  node.value = val;
};



// right now this is an infinite loop:

// LinkedList.prototype.reverseList = function() {
//   var currentNode = this.head;
//   if (this.head === this.tail) {
//     return this.head;
//   } else {
//     var nextNode = currentNode.next;
//     while (nextNode) {
//       if (nextNode === this.tail) {
//         nextNode = this.head;
//         nextNode.next = currentNode;
//       } else {
//         if (currentNode === this.head) {
//           currentNode = this.tail;
//         }
//         var nextNextNode = nextNode.next;
//         nextNode.next = currentNode;
//         currentNode = nextNode;
//         nextNode = nextNextNode;
//       }
//     }
//     return currentNode;
//   }
// }



// Reverse a linked list (if given only the head node
// and creating the list from just nodes): 

var LinkedListNode = function(value) {
  this.value = value;
  this.next = null;
}

var head = new LinkedListNode(1);
var second = new LinkedListNode(2);
var third = new LinkedListNode(3);
var fourth = new LinkedListNode(4);
head.next = second;
second.next = third;
third.next = fourth;

function reverseLinkedList(headNode) {
  var currentNode = headNode;
  if (currentNode.next) {
    var nextNode = currentNode.next;
    currentNode.next = null;
  } else {
    return currentNode;
  }
  while (nextNode) {
    var nextNextNode = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = nextNextNode;
  }
  return currentNode;
}






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

var LinkedListNode = function(value) {
  this.value = value;
  this.next = null;
}

var firstNode = new LinkedListNode(1);
var secondNode = new LinkedListNode(2);
var thirdNode = new LinkedListNode(3);

firstNode.next = secondNode;
secondNode.next = thirdNode;

// Delete node (doesn't work if the node is the tail): 

var deleteNode = function(node) {
  var val = node.next.val;
  node.next = node.next.next;
  node.value = val;
};


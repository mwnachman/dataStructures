var BinarySearchTreeNode = function(value) {

  this.value = value;
  this.left = null;
  this.right = null;

}

BinarySearchTreeNode.prototype.addChild = function(value) {
  if (value < this.value) {
    if (this.left === null ) {
      this.left = new BinarySearchTreeNode(value);
    } else {
      this.left.addChild(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTreeNode(value);
    } else {
      this.right.addChild(value);
    }
  }
  // else (eg if value === this.value) -- do nothing because
  // tree already contains this value and can't have dupes
}

BinarySearchTreeNode.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }
}

BinarySearchTreeNode.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}


// Use case: Given a list of a million numbers, write a 
// function that takes a new number and returns the closest 
// number in the list using your BST. 
// Profile this against the same operation using an array.

// This isn't right yet:

// BinarySearchTreeNode.prototype.findClosestNode = function(value) {
//   var difference = Math.abs(this.value - value);
//   if (value === this.value) {
//     return difference;
//   } else if (value < this.value) { 
//       if (this.left) {
//         return this.left.findClosestNode(value);   
//       } else {
//         return difference;
//       }
//   } else {
//     if (this.right) {
//       return this.right.findClosestNode(value);
//     } else {
//       return difference;
//     }
//   }
// }

// Find second largest node

BinarySearchTreeNode.prototype.findSecondLargestNode = function() {
  if (this.right) {
    if (this.right.right === null && this.right.left === null) {
      return this.value;
    } else if (this.right.right && this.right.left === null) {
      this.right.findSecondLargestNode();
    } else if (this.right.left && this.right.right === null) {
        return this.right.left.findSecondLargestNode();
      } 
    }
  } 
}


























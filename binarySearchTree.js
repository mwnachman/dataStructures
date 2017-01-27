var binarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

binarySearchTree.prototype.insertNode = function(value) {
  if (value < this.value) {
    if (this.left === null ) {
      this.left = value
    } else {
      this.left.insertNode(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = value;
    } else {
      this.right.insertNode(value);
    }
  }
  // else (eg if value === this.value) -- do nothing because
  // tree already contains this value and can't have dupes
}

binarySearchTree.prototype.contains = function(value) {
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


binarySearchTree.prototype.depthFirstLog = function(callback) {
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





























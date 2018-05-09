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

// My rather inelegant solution (if two numbers are equally close, 
// it returns the last one it finds:

BinarySearchTreeNode.prototype.findClosestNode = function(value, closestSoFar) {
  closestSoFar = closestSoFar || Math.MAX_VALUE;
  if (value === this.value) {
    return this.value;
  } else if (value > this.value) { 
    if (this.right) {
      closestSoFar = Math.abs(closestSoFar - value) < Math.abs(this.value - value) ? closestSoFar : this.value;
      return this.right.findClosestNode(value, closestSoFar);   
    } else {
      return Math.abs(closestSoFar - value) < Math.abs(this.value - value) ? closestSoFar : this.value;
    }
  } else if (value < this.value) {
    if (this.left) {
      closestSoFar = Math.abs(closestSoFar - value) < Math.abs(this.value - value) ? closestSoFar : this.value;
      return this.left.findClosestNode(value, closestSoFar);
    } else {
      return Math.abs(closestSoFar - value) < Math.abs(this.value - value) ? closestSoFar : this.value;
    }
  }
}


// Find second largest node

// Helper function to find largest node:

BinarySearchTreeNode.prototype.findLargestNode = function() {
  if (this.right) {
    return this.right.findLargestNode();
  } else {
    return this.value;
  }
}

BinarySearchTreeNode.prototype.findSecondLargestNode = function() {
  if (this.right) {
    if (this.right.right === null && this.right.left === null) {
      return this.value;
    } else {
      return this.right.findSecondLargestNode();
    } 
  } else if (this.left) {
    return this.left.findLargestNode();
  }
}


// Function to see if binary search tree has same depth (within 1 node)
// on all branches:

BinarySearchTreeNode.prototype.checkDepthEquality = function() {
  var depths = [];
  var result = true;
  var recurse = function(depth, node) {
    if (!node.right && !node.left) {
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);
      }
      depths = depths.sort();
    }
    if (depths.length > 2 || depths[depths.length - 1] - depths[0] > 1) {
      result = false;
      return;
    } else {
      if (node.right) {
        recurse(depth + 1, node.right);
      } 
      if (node.left) {
        recurse(depth + 1, node.left);
      }
    }
  }
  recurse(0, this);
  return result;
}
























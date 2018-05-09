// Create Tree

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That is already a child of this tree.");
  }
  // to see the child that was added, for convenience
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree.");
  }
}



// To count the number of leaves (i.e., nodes with no children):

Tree.prototype.countLeaves = function() {
  var count = 0;
  var recurse = function(node) {
    if (node.children.length === 0) {
      count++;
    }
    for (var i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
    }
  }
  recurse(this);
  return count;
};


// Map over tree:

Tree.prototype.map = function(callback) {
  var mappedTree = new Tree(callback(this.value));
  for (var i = 0; i < this.children.length; i++) {
    mappedTree.addChild(this.children[i].map(callback));
  }
  return mappedTree;
};

// Map in place:

Tree.prototype.mapInPlace = function(callback) {
  this.value = callback(this.value);
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].mapInPlace(callback);
  }
};


// Depth First Filter Method:
// (Depth is included in case you want to filter for it)

Tree.prototype.depthFirstFilter = function(filter, depth, results) {
  results = results || [];
  depth = depth || 0;

  if (filter(this.value, depth)) {
    results.push(this.value);
  }

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.depthFirstFilter(filter, depth + 1, results);
  }

  return results;
}















var BinarySearchTree = function(val) {
  var node = Object.create(bTreeMethods);
  node.value = val;
  node.left = undefined;
  node.right = undefined;

  return node;
};

var bTreeMethods = {};

bTreeMethods.insert = function(val) {
  if (val > this.value) {
    if (this.right !== undefined) {
      this.right.insert(val);
    } else {
      this.right = BinarySearchTree(val);
    }
  } else if (val < this.value) {
    if (this.left !== undefined) {
      this.left.insert(val);
    } else {
      this.left = BinarySearchTree(val);
    }
  }
};  

bTreeMethods.contains = function(val) {
  var result = false;
  if (val === this.value) {
    result = true;
  } else if (val < this.value && this.left !== undefined) {
    result = this.left.contains(val);
  } else if (val > this.value && this.right !== undefined) {
    result = this.right.contains(val);
  }
  return result;
};

bTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  //call callback on each value in the tree
  //keep results, return results at the end
  // debugger;

  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

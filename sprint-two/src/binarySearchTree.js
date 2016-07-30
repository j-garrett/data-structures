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

  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
};

bTreeMethods.breadthFirstLog = function(callback) {
  var results = [];
  var children = [];
  var firstTime = true;
  debugger;
  //push each node to results with [tier, value]
  //from there, sort array and return an array with all the values
  
  //for a node, push its children to a children array
  // .left always gets pushed first, .right pushed second for a given node
  // then, iterate through children and repeat
  //at the end, nodes will be in order and iterate through with to return values
  
  var recurseBreadth = function(node) {
    results.push(node.value);
    if (node.left) {
      children.push(node.left);
    }
    if (node.right) {
      children.push(node.right);
    }
    if (children.length > 0) {
      recurseBreadth(children.shift());
    }
  };
  if (firstTime) {
    recurseBreadth(this);
    firstTime = false;
  }

  _.each(results, function(item) {
    callback(item);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// for children, do callback on them
// for children, run this function on them
var BinarySearchTree = function(val) {
  var node = Object.create(bTreeMethods);
  node.value = val;
  node.left = undefined;
  node.right = undefined;

  //keep track of the node's depth
  node.depth = 1;

  return node;
};

var bTreeMethods = {};

bTreeMethods.insert = function(val) {
  if (val > this.value) {
    if (this.right !== undefined) {
      this.right.insert(val);
    } else {
      this.right = BinarySearchTree(val);
      this.right.depth = this.depth + 1;
    }
  } else if (val < this.value) {
    if (this.left !== undefined) {
      this.left.insert(val);
    } else {
      this.left = BinarySearchTree(val);
      this.left.depth = this.depth + 1;
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
  callback(this);

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
  
  var recurseBreadth = function(node) {
    results.push(node);
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

bTreeMethods.depthCount = function() {
  var depCount = [];
  var nodes = [];
  var minDepth = 0;
  var maxDepth = 0;

  this.breadthFirstLog(function(node) {
    nodes.push(node);
  });

  nodes.forEach(function(node) {
    var depth = node.depth;
    if (depCount[depth - 1] !== undefined) {
      depCount[depth - 1] += 1;
    } else if (depCount[depth - 1] === undefined) {
      depCount[depth - 1] = 1;
    }
  });

  for (var i = 1; i < depCount.length; i++) {
    if (depCount[i - 1] * 2 !== depCount[i]) {
      minDepth = i + 1;
      break;
    }
  }

  maxDepth = depCount.length;

  return [depCount, minDepth, maxDepth, nodes];
};

bTreeMethods.rebalance = function(nodes) {

  var sorted = nodes.sort(function(a, b) {
    return a.value - b.value;
  });
  var midPoint = Math.floor(sorted.length / 2);
  var firstHalf = sorted.slice(0, midPoint);
  var secondHalf = sorted.slice(midPoint);
  var longest = firstHalf.length > secondHalf.length ? firstHalf.length : secondHalf.length;
  //reverse first half
  firstHalf.reverse();
  //create new binary search tree to have values inserted into
  var newBinarySearchTree = BinarySearchTree(secondHalf[0].value);
  //declare curNode variable for using inside loops
  var curNode;
  //two for loops to add incrementing by i while jumping between
  debugger;
  for (var i = 1; i < longest; i++) {
    //every other i takes from the alternating half
    if ( i % 2 === 0) {
      curNode = secondHalf[i];
    } else {
      curNode = firstHalf[i];
    }
    if (curNode !== undefined) {
      newBinarySearchTree.insert(curNode.value);
    }
  }
  //loop through remaining values in our half arrays
  for (var i = 0; i < longest; i++) {
    //every other i takes from the alternating half
    if ( i % 2 === 0) {
      curNode = firstHalf[i];
    } else {
      curNode = secondHalf[i];
    }
    if (curNode !== undefined) {
      newBinarySearchTree.insert(curNode.value);
    }
  }

  debugger;

  return [sorted, newBinarySearchTree];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

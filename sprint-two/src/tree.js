var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild); 
};

treeMethods.contains = function(target) {
  //recursively search the tree for target
  //return boolean for search result
  var result = [];

  if (this.value === target) {
    result.push(true);
  } 
  if (this.children.length > 0) {
    this.children.forEach( (child) => {
      result = result.concat(child.contains(target));
    });
  }

  return result.indexOf(true) !== -1 ? true : false;
};

treeMethods.removeFromParent = function(target, index) {
  var result;

  if (this.value === target) {
    result = this;
    result.parent.children.splice(index, 1);
    result.parent = null;
  } 
  if (this.children.length > 0) {
    this.children.forEach( (child, index) => {
      child.removeFromParent(target, index);
    });
  }

  return result;
};

treeMethods.traverse = function(callback) {

  callback(this);

  if (this.children.length > 0) {
    this.children.forEach( (child) => {
      child.traverse(callback);
    });
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

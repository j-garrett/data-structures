var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value)); 
   // fix me
};

treeMethods.contains = function(target) {
  //recursively search the tree for target
  //return boolean for search result
  // debugger;
  var result = [];
  if (this.value === target) {
    result.push(true);
  } 
  if (this.children.length > 0) {
    this.children.forEach( (child) => {
      result = result.concat(child.contains(target));
    });
  }
//debugger;
  return result.indexOf(true) !== -1 ? true : false;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

// {
//   value: 1,
//   children
// }


// Instantiate a new graph
var Graph = function() {
  
  this.graphStorage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphStorage[node] = {
    value: node
  };
  this.graphStorage[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.graphStorage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeValue = node;
  var nodeEdges = this.graphStorage[node].edges;

  nodeEdges.forEach( (value) => {
    this.removeEdge(node, value);
  });

  delete this.graphStorage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graphStorage[fromNode].edges.indexOf(toNode) !== -1 && this.graphStorage[toNode].edges.indexOf(fromNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphStorage[fromNode].edges.push(toNode);
  this.graphStorage[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeIndex = this.graphStorage[fromNode].edges.indexOf(toNode);
  var fromNodeIndex = this.graphStorage[toNode].edges.indexOf(fromNode);


  this.graphStorage[fromNode].edges.splice(toNodeIndex, 1);
  this.graphStorage[toNode].edges.splice(fromNodeIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graphStorage) {
    debugger;
    cb(this.graphStorage[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



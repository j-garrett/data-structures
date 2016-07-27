var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.storageSize = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.storageSize - 1];
  if (this.size() > 0) {
    delete this.storage[this.storageSize - 1];
    this.storageSize--;
  }
  return popped;
};

stackMethods.size = function() {
  return this.storageSize;
};
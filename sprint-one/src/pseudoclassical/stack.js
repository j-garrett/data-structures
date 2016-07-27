var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.storageSize - 1];
  if (this.size() > 0) {
    delete this.storage[this.storageSize - 1];
    this.storageSize--;
  }
  return popped;
};

Stack.prototype.size = function() {
  return this.storageSize;
};
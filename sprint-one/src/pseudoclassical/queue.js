var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qCounter = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.qCounter] = value;
  this.qCounter++;
};

Queue.prototype.dequeue = function() {
  var key = Object.keys(this.storage)[0];
  var removed = this.storage[key];
  delete this.storage[key];

  return removed;
};

Queue.prototype.size = function() {
  var qLength = Object.keys(this.storage).length;
  return qLength >= 0 ? qLength : 0;
};

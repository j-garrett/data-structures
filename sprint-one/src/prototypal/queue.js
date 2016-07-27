var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.qCounter = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.qCounter] = value;
  this.qCounter++;
};

queueMethods.dequeue = function() {
  var key = Object.keys(this.storage)[0];
  var removed = this.storage[key];
  delete this.storage[key];

  return removed;
};

queueMethods.size = function() {
  var qLength = Object.keys(this.storage).length;
  return qLength >= 0 ? qLength : 0;
};



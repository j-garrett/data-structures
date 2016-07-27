var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.qCounter = 0;

  _.extend(newQueue, qMethods);

  return newQueue;
};

qMethods = {};

qMethods.enqueue = function(value) {
  this.storage[this.qCounter] = value;
  this.qCounter++;
};

qMethods.dequeue = function() {
  var key = Object.keys(this.storage)[0];
  var removed = this.storage[key];
  delete this.storage[key];

  return removed;
};

qMethods.size = function() {
  var qLength = Object.keys(this.storage).length;
  return qLength >= 0 ? qLength : 0;
};



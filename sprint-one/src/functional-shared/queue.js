var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.qCounters = [0, 0];

  _.extend(newQueue, qMethods);

  return newQueue;
};

var qMethods = {};

qMethods.enqueue = function(value) {
  this.storage[this.qCounters[1]] = value;
  this.qCounters[1]++;
};

qMethods.dequeue = function() {
  var removed = this.storage[this.qCounters[0]];
  delete removed;
  this.qCounters[0]++;
  return removed;
};

qMethods.size = function() {
  return this.qCounters[1] - this.qCounters[0] > 0 ? this.qCounters[1] - this.qCounters[0] : 0;
};



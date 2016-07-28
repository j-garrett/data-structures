var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.qCounters = [0, 0];

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.qCounters[1]] = value;
  this.qCounters[1]++;
};

queueMethods.dequeue = function() {
  var removed = this.storage[this.qCounters[0]];
  delete removed;
  this.qCounters[0]++;
  return removed;
};

queueMethods.size = function() {
  return this.qCounters[1] - this.qCounters[0] > 0 ? this.qCounters[1] - this.qCounters[0] : 0;
};
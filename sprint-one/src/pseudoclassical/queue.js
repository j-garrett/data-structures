var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qCounters = [0, 0];
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.qCounters[1]] = value;
  this.qCounters[1]++;
};

Queue.prototype.dequeue = function() {
  var removed = this.storage[this.qCounters[0]];
  delete removed;
  this.qCounters[0]++;
  return removed;
};

Queue.prototype.size = function() {
  return this.qCounters[1] - this.qCounters[0] > 0 ? this.qCounters[1] - this.qCounters[0] : 0;
};

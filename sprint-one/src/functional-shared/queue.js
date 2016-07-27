var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

};

var queueMethods = {};

queueMethods.enqueue = function() {

};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return Object.keys(this).length < 0 ? 0 : Object.keys(this).length;
};

queueMethods.qCounter = 0;

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};




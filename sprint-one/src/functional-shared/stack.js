var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  _.extend(someInstance, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
};

stackMethods.pop = function() {

};

stackMethods.size = function() {
  return Object.keys(this).length < 0 ? 0 : Object.keys(this).length;
};



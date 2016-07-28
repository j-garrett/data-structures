var Queue = function() {

  //queue is first one in, first one out

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  qCounters = [0, 0];

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add to back of the line
    storage[qCounters[1]] = value;
    qCounters[1]++;
  };

  someInstance.dequeue = function() {
    //remove from front of the line
    var removed = storage[qCounters[0]];
    delete removed;
    qCounters[0]++;
    return removed;
  };

  someInstance.size = function() {
    //return qLength if it's greater than 0
    return qCounters[1] - qCounters[0] > 0 ? qCounters[1] - qCounters[0] : 0;
  };

  return someInstance;
};

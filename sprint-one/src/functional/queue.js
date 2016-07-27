var Queue = function() {

  //queue is first one in, first one out

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  qCounter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add to back of the line
    storage[qCounter] = value;
    qCounter++;
  };

  someInstance.dequeue = function() {
    //remove from front of the line
    var removed = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];

    return removed;
  };

  someInstance.size = function() {
    //return qLength if it's greater than 0
    return Object.keys(storage).length >= 0 ? Object.keys(storage).length : 0;
  };

  return someInstance;
};

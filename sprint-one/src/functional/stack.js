var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size() + 1] = value;
    storageSize++;
  };

  someInstance.pop = function() {
    var popped = storage[someInstance.size()];

    delete storage[someInstance.size()];

    storageSize--;

    return popped;
  };

  someInstance.size = function() {
    return storageSize < 0 ? 0 : storageSize;
  };

  return someInstance;
};
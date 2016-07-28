var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);

    if (list.tail !== null) {
      list.tail.next = value;
    }
    if (list.head === null) {
      list.head = newTail;
    }
    list[value] = newTail;
    list.tail = newTail;
  };

  list.removeHead = function() {
    var result = list.head;
    delete list[result.value];
    list.head = list[result.next];
    return result.value;
  };

  list.contains = function(target) {
    return list.hasOwnProperty(target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

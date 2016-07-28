var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    if (list.tail !== null) {
      list.tail.next = value;
      newTail.previous = list.tail.value;
    }
    if (list.head === null) {
      list.head = newTail;
    }
    list[value] = newTail;
    list.tail = newTail;
  };

  //advanced
  list.addToHead = function(value) {

    //adds node to the front of the list
    //set current head's .previous property to new value
    var newHead = new Node(value);
    if (list.head !== null) {
      list.head.previous = value;
      newHead.next = list.head.value;
    }
    if (list.tail === null) {
      list.tail = newHead;
    }
    list[value] = newHead;
    list.head = newHead;
  };

  list.removeHead = function() {
    var result = list.head;
    delete list[result.value];
    list.head = list[result.next];
    return result.value;
  };

  //advanced
  list.removeTail = function() {
    var result = list.tail;
    delete list[result.value];
    list.tail = list[result.previous] || null;
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
  node.previous = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

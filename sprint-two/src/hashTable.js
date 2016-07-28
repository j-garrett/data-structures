

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this[index]) {
    var vals = [[this[index], this[index]], [k, v]];
    this[index] = vals;
  } else {
    this[index] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this[index])) {
    var arrays = this[index];
    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i][0] === k) {
        return arrays[i][1];
      }
    }
    return arrays[0][1];
  }

  return this[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this[index])) {
    var arrays = this[index];
    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i][0] === k) {
        delete arrays[i][1];
      }
    }
    delete arrays[0][1];
  } else {
    delete this[index];
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

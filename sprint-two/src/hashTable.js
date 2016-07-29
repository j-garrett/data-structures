

var HashTable = function() {
  this._limit = 8;
  this._taken = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this.resize();
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this[index]) {
    var vals = [[this[index], this[index]], [k, v]];
    this[index] = vals;
  } else {
    this[index] = v;
  }
  this._taken++;
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
  this.resize();
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
  this._taken--;
};

HashTable.prototype.resize = function() {
  var percentFull = this._taken / this._limit;
  if (percentFull >= 0.75) {
    this._limit *= 2;
  }
  if (percentFull <= 0.25) {
    this._limit /= 2;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

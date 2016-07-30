var HashTable = function() {
  this._limit = 8;
  this._taken = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var existing = this._storage.get(index);
  var result = [[k, v]];
  
  if (existing !== undefined && existing.length > 0) {
    existing.push([k, v]);
    result = existing;
  }

  this._storage.set(index, result);
  this._taken++;
  this.resize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var existing = this._storage.get(index);
  var result;
  if (existing !== undefined) {
    for (var i = 0; i < existing.length; i++) {
      if (existing[i] !== undefined && existing[i][0] === k) {
        result = existing[i][1];
      }
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this._taken--;
  this.resize();
};

HashTable.prototype.resize = function() {
  var percentFull = this._taken / this._limit;
  var oldHash = this._storage;
  var curHashTable = this;
  var buildNew = function() {
    curHashTable._storage = LimitedArray(curHashTable._limit);
    oldHash.each(function(item, index, collection) {
      if (item !== undefined) {
        for (var i = 0; i < item.length; i++) {
          if (Array.isArray(item[i])) {
            curHashTable.insert(item[i][0], item[i][1]);
            curHashTable._taken--;
          }
        }
      }
    });
  };

  if (percentFull >= 0.75) {
    curHashTable._limit *= 2;
    buildNew();
  } else if (percentFull <= 0.25 && curHashTable._taken >= 4) {
    curHashTable._limit /= 2;
    buildNew();
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

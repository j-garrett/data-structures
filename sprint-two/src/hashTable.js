

var HashTable = function() {
  this._limit = 8;
  this._taken = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this[index] === undefined || !Array.isArray(this[index])) {
    this[index] = [];  
  }
  if (this[index]) {
    for (var i = 0; i < this[index].length; i++) {
      if (this[index][i][0] === k) {
        this[index][i] = [k, v];
        this._taken++;
        this.resize();
        return;
      }
    }
  } 
  this[index].push([k, v]);
  this._taken++;
  this.resize();
  return;
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this[index];

  if (Array.isArray(bucket)) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this[index];
  var toDelete;

  if (tuples !== undefined) {
    for (var i = 0; i < tuples.length; i++) {
      if (tuples[i][0] === k) {
        toDelete = i;
        if(this._taken > 0) {
          this._taken--;
        }
        
      }
    }
  }
  delete this[toDelete];
  this.resize();
};

HashTable.prototype.resize = function() {

  var percentFull = this._taken / this._limit;
  var updateThese = [];
  var parent = this;

  if (percentFull >= 0.75 || percentFull <= 0.25 ) {
    debugger;
    for (var i = 0; i < this._limit; i++) {
      if (Array.isArray(this[i])) {
        for (var i2 = 0; i2 < this[i].length; i2++) {
          updateThese.push(this[i][i2]);
          //is it safe to do this remove function inside this loop?
          this.remove(this[i][i2][0]);
        }
      }
    }
    if (percentFull >= 0.75) {
      this._limit *= 2;
    } else if (percentFull <= 0.25) {
      this._limit /= 2;
    }
    _.each(updateThese, function(item) {
      parent.insert(item[0], item[1]);
    });
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

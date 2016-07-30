

var HashTable = function() {
  this._limit = 8;
  this._taken = 0;
  this._storage = LimitedArray(this._limit);
  this._callResize = true;
};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  debugger;
  var existing = this._storage.get(index);
  // var result = [[k, v]];
  var result = [k, v];

  if ( Array.isArray(existing) ) {
    this._storage.each(function(item, bucket, storage) {
      if (item !== undefined && bucket === index) {
        debugger;
        //if current element is just one element long,
        //convert that element to a 2d array, and then push the existing element
        //and the new element into that 2d array
        existing.push(result);

        
        // result.push(item);
      }
    });
  } else {
    this._storage.set(index, result);
  }
  // debugger;


  // if (this[index] === undefined || !Array.isArray(this[index])) {
  //   this[index] = [];  
  // }
  // if (this[index]) {
  //   for (var i = 0; i < this[index].length; i++) {
  //     if (this[index][i][0] === k) {
  //       this[index][i] = [k, v];
  //       this._taken++;
  //       if (this._callResize === true && this._taken >= 3) {
  //         this.resize();
  //       }
  //       return;
  //     }
  //   }
  // } 
  // this[index].push([k, v]);
  // this._taken++;
  // if (this._callResize === true && this._taken >= 3) {
  //   this.resize();
  // }
  // return;
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var item = this._storage.get(index);
  return item[1];





  // var bucket = this[index];

  // if (Array.isArray(bucket)) {
  //   for (var i = 0; i < bucket.length; i++) {
  //     if (bucket[i] !== undefined) {
  //       if (bucket[i][0] === k) {
  //         return bucket[i][1];
  //       }
  //     }
  //   }
  // }

  // return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, undefined]);






  // var tuples = this[index];
  // var toDelete;
  // if (tuples !== undefined) {
  //   for (var i = 0; i < tuples.length; i++) {
  //     if (tuples[i][0] === k) {
  //       toDelete = i;
  //     }
  //   }
  //   delete tuples[toDelete];
  //   if (this._taken > 0) {
  //     this._taken--;
  //   }
  // }
  // debugger;
  // if (this._callResize === true && this._taken >= 2) {
  //   this.resize();
  // }
};

HashTable.prototype.resize = function() {
  var percentFull = this._taken / this._limit;
  














  // var addToNewHash = [];
  // if (percentFull >= 0.75) {
  //   this._callResize = false;
  //   for (var i = 0; i < this._limit; i++) {
  //     if (this[i] !== undefined) {
  //       addToNewHash.push(this[i]);
  //     }
  //   }
  //   for (var i2 = 0; i2 < addToNewHash; i2++) {
  //     for (var i3 = 0; i3 < addToNewHash[i2]; i3++) {
  //       this.remove(addToNewHash[i2][i3][0]);
  //     }
  //   }
  //   this._limit *= 2;
  //   for (i2 = 0; i2 < addToNewHash; i2++) {
  //     var item = addToNewHash[i2];
  //     if (Array.isArray(item)) {
  //       this.insert(item[0], item[1]);
  //     }
  //   }
  //   this._callResize = true; 
  // } 
  // if (percentFull <= 0.25) {
  //   debugger;
  //   this._callResize = false;
  //   for (var i = 0; i < this._limit; i++) {
  //     if (this[i] !== undefined) {
  //       addToNewHash.push(this[i]);
  //     }
  //   }
  //   for (var i2 = 0; i2 < addToNewHash; i2++) {
  //     for ( var i3 = 0; i3 < addToNewHash[i2]; i3++) {
  //       this.remove(addToNewHash[i2][i3][0]);
  //     }
  //   }
  //   this._limit /= 2;
  //   for (i2 = 0; i2 < addToNewHash; i2++) {
  //     var item = addToNewHash[i2];
  //     if (Array.isArray(item)) {
  //       this.insert(item[0], item[1]);
  //     }
  //   }
  //   this._callResize = true; 
  // }


  // var updateThese = [];
  // var parent = this;
  // //grab old limit to remove keys all at once
  // var oldLimit;
  // if (percentFull >= 0.75 || percentFull <= 0.25 ) {
  //   for (var i = 0; i < this._limit; i++) {
  //     if (Array.isArray(this[i])) {
  //       for (var i2 = 0; i2 < this[i].length; i2++) {
  //         updateThese.push(this[i][i2]);
  //         //is it safe to do this remove function inside this loop?
  //         this.remove(this[i][i2][0]);
  //       }
  //     }
  //   }
  //   if (percentFull >= 0.75) {
  //     this._limit *= 2;
  //   } else if (percentFull <= 0.25) {
  //     this._limit /= 2;
  //   }
  //   _.each(updateThese, function(item) {
  //     parent.insert(item[0], item[1]);
  //   });
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

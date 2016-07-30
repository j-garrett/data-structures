describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value.value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value.value); };

    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.breadthFirstLog(func);

    expect(array).to.eql([5, 4, 8, 3, 7, 9, 1]);
  });

  it('should return the count of all node depths', function() {

    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    var array = binarySearchTree.depthCount();

    expect(array[0]).to.eql([1, 2, 3, 1]);
  });

  it('should return the minimum depth', function() {

    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    var array = binarySearchTree.depthCount();
 
    expect(array[1]).to.eql(3);
  });

  it('should return the maximum depth', function() {

    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    var array = binarySearchTree.depthCount();

    expect(array[2]).to.eql(4);
  });

  it('should return the nodes sorted by value', function() {

    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    var array = binarySearchTree.depthCount();
    var toSort = array[3].slice(0);
    var sorted = binarySearchTree.rebalance(toSort);

    expect(sorted[0]).to.not.eql(array[3]);
  });

});

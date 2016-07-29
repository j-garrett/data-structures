describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should be capable of handling numbers as well as strings', function() {
    set.add('Mel Gibson');
    expect(Object.keys(set._storage)).to.eql(['Mel Gibson']);
    set.add(1);
    set.add(2);
    expect(set._storage[1]).to.equal(1);
  });

  it('should be capable of handling input objects of any type', function() {
    set.add('Mel Gibson');
    var addArray = [2];
    var addObj = {3: 4};
    set.add(1);
    set.add(addArray);
    set.add(addObj);
    expect(set.contains(addArray)).to.equal(true);
    expect(set.contains({3: 4})).to.equal(true);
    expect(set.contains(addObj)).to.equal(true);
  });
});

describe('DateComparator', function() {
  var dateComparator;

  beforeEach(function() {
    dateComparator = new DateComparator();
  });

  it('should be defined.', function () {
    expect(dateComparator.compare).toBeDefined();
  });

  it('should be a function.', function () {
    expect(typeof dateComparator.compare).toBe('function');
  });

  it('should throw Error because date1 is not Date object.', function() {
    var date1 = new Date('2017/09/01');
    var date2 = '2017/08/01';
    
    expect(function() { 
      dateComparator.compare(date1, date2);
    }).toThrowError('One or both parameters must be Date.');
  });

  it('should throw Error because date2 is not Date object.', function() {
    var date1 = '2017/09/01';
    var date2 = new Date('2017/08/01');
    
    expect(function() {
      dateComparator.compare(date1, date2)
    }).toThrowError('One or both parameters must be Date.');
  });

  it('should return that the first date is after the second date!', function() {
    var date1 = new Date('2017/09/01');
    var date2 = new Date('2017/08/01');
    var expected = 'The first date is after the second date!';

    var res = dateComparator.compare(date1, date2);

    expect(res).toEqual(expected);
  });

  it('should return that the second date is after the first date!', function() {
    var date1 = new Date('2017/08/01');
    var date2 = new Date('2017/09/01');
    var expected = 'The second date is after the first date!';

    var res = dateComparator.compare(date1, date2);

    expect(res).toEqual(expected);
  });

  it('should return that the dates the same if they are equal!', function() {
    var date1 = new Date('2017/08/01');
    var date2 = new Date('2017/08/01');
    var expected = 'The dates are equal!';

    var res = dateComparator.compare(date1, date2);

    expect(res).toEqual(expected);
  });

});
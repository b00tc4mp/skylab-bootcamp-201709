describe('getTypeOf', function() {
  it('should be return the "string" for a string input', function() {
    var input = '';
    var expected = 'string';

    var res = getTypeOf(input);

    expect(res).toBe(expected);
  });

  it('should be return the "boolean" for a boolean input', function() {
    var input = true;
    var expected = 'boolean';

    var res = getTypeOf(input);

    expect(res).toBe(expected);
  });

  it('should be return the "function" for a function input', function() {
    var input = function() {};
    var expected = 'function';

    var res = getTypeOf(input);

    expect(res).toBe(expected);
  });

  it('should be return the "number" for a number input', function() {
    var input = 10;
    var expected = 'number';

    var res = getTypeOf(input);

    expect(res).toBe(expected);
  });

  it('should be return the "object" for an object input', function() {
    var input = {};
    var expected = 'object';

    var res = getTypeOf(input);

    expect(res).toBe(expected);
  });

  it('should return "undefined" for an undefined input', function() {
      var input = undefined;

      var res = getTypeOf(input);

      expect(res).toBeUndefined();
  });
});

describe('getExponent', function() {
    it('should give the exponent', function() {
        var result = getExponent(4, 2);
        var expected = 16;

        expect(result).toBe(expected);
    });

    it('should throw an error on no arguments', function() {
        expect(function() {
        	getExponent();
        }).toThrowError();
    });
});
describe('getPerfectNumbers', function() {
    it('should return a 0', function() {

        var n = 6;

        var res = getPerfectNumbers(n);

        expect(res).toBe(n + ' is a perfect number');
    });

    it('should return "is not a perfect number" for a non-perfect number input', function() {
        var n = 5;

        var res = getPerfectNumbers(n);

        expect(res).toBe(n + 'is not a perfect number');
    });

});
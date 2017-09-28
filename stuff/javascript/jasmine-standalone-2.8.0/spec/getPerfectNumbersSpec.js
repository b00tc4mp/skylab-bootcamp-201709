describe('getPerfectNumbers', function() {
    it('should return a 0', function() {

        var n = 6;
        
        var res = getPerfectNumbers(n);

        expect(res).toBe(n + ' is a perfect number');
    });

    it('should return an error if is not a perfect number', function() {
        var n = 5;
        
        var res = getPerfectNumbers(n);

        expect(res).toBe(n + ' is not a perfect number');
    });

});
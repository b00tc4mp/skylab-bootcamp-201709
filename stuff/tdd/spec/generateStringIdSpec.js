describe('generateStringId', function() {
    it('should be defined', function() {
        expect(generateStringId).toBeDefined()
    });

    it('should be a function', function() {
        expect(typeof generateStringId).toBe("function")
    });

    it('should return a string with length equal to input number', function() {
        var num = 3;
        var id = generateStringId(num);

        var expected = num;

        expect(id.length).toEqual(expected);
    });

    it('should throw an error if input is not a number', function() {
        expect(function() {
            generateStringId('e');
        }).toThrowError();
    });


    it("should throw an error if no input", function() {
        expect(function() {
            generateStringId();
        }).toThrowError();
    })

})
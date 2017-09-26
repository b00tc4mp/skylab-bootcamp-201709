describe('countChars', function() {
    it('should count chars successfully', function() {
        var input = "hello world, HELLO WORLD";
        var expected = {
            'h': 1 + 1,
            'e': 1 + 1,
            'l': 3 + 3,
            'o': 2 + 2,
            'w': 1 + 1,
            'r': 1 + 1,
            'd': 1 + 1
        };

        var res = countChars(input);

        expect(res).toEqual(expected);
    });
});
describe('Counter', function() {
	var counter;

	beforeEach(function() {
		counter = new Counter();
	});

	/**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     * 
     * SEE https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

	it('should count up', function() {
        var n = getRandomInt(1, 1000);

        for (var i = 0; i < n; i++)
            counter.count();

        expect(counter.value).toBe(n);
	});
});
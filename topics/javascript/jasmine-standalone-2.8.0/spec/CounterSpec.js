describe('Counter', function() {
	var counter;

	beforeEach(function() {
		counter = new Counter();
	});

	it('should count up', function() {
        var n = getRandomInt(1, 1000);

        for (var i = 0; i < n; i++)
            counter.count();

        expect(counter.value).toBe(n);
	});
});
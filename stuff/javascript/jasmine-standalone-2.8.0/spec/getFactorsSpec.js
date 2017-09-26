describe('getFactors', function() {
	it('should return factors for positive integer input', function() {
		var num = 16;
		var expected = [1, 2, 4, 8, 16];

		var res = getFactors(num);

		expect(res).toEqual(expected);
	});

	it('should return nothing for negative integer input', function() {
		var num = -16;

		var res = getFactors(num);

		expect(res).toBeUndefined();
	});

	it('should return nothing for non-valid integer input', function() {
		var num = 'a';

		var res = getFactors(num);

		expect(res).toBeUndefined();
	});

	it('should return nothing for undefined input', function() {
		var num = undefined;

		var res = getFactors(num);

		expect(res).toBeUndefined();
	});

	it('should return empty array for 0 input', function() {
		var num = 0;
		var expected = [];

		var res = getFactors(num);

		expect(res).toEqual(expected);
	});
});
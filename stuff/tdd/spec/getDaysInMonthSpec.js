describe("getDaysInMonth", function(){
	it("should count days for input month and year", function(){
		var month = 9;
		var year = 2010;

		var days = getDaysInMonth(month, year);

		var expected = 30;

		expect(days).toBe(expected);
	});

	it("should return undefined for no input", function(){
		var days = getDaysInMonth();

		expect(days).toBeUndefined();
	});
});

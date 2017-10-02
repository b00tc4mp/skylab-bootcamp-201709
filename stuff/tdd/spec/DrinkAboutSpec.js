describe('DrinkAbout', function() {
	var drinkAbout;

	beforeEach(function() {
		drinkAbout = new DrinkAbout();
	});

	it('should return drink toddy for children', function() {
		var age = getRandomInt(0, 13);

		var res = drinkAbout.whatCanIDrink(age);

		expect(res).toBe('drink toddy');
	});

	it('should return drink coke for teens', function() {
		var age = getRandomInt(14, 17);

		var res = drinkAbout.whatCanIDrink(age);

		expect(res).toBe('drink coke');
	});

	it('should return drink beer for youngs', function() {
		var age = getRandomInt(18, 20);

		var res = drinkAbout.whatCanIDrink(age);

		expect(res).toBe('drink beer');
	});

	it('should return drink whisky for adults', function() {
		var age = getRandomInt(21, 100);

		var res = drinkAbout.whatCanIDrink(age);

		expect(res).toBe('drink whisky');
	});
});
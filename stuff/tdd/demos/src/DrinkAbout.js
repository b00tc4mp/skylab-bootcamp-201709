function DrinkAbout() {

}

DrinkAbout.prototype.whatCanIDrink = function(age) {
	var drink = 'drink ';

	switch (true) {
		case age < 14: drink += 'toddy'; break;
		case age < 18: drink += 'coke'; break;
		case age < 21: drink += 'beer'; break;
		default: drink += 'whisky';
	}

	return drink;
}
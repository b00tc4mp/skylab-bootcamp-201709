function getFactors(integer) {
	if (typeof integer !== 'number' || integer < 0)
		return;

    var factors = [],
        quotient = 0;

    for (var i = 1; i <= integer; i++) {
        quotient = integer / i;

        if (quotient === Math.floor(quotient)) {
            factors.push(i);
        }
    }

    return factors;
}
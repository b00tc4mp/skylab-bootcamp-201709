function getExponent(a, b) {
	var res = Math.pow(a, b);

	if (isNaN(res)) 
		throw Error('invalid conditions');

    return res;
}
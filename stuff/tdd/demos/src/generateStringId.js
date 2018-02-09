function generateStringId(num) {
	if (typeof num !== 'number') throw Error('input is not a number');

    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

    var idChars = [];

    var countDown = num;

    while(countDown--) {
        idChars.push(chars[Math.floor(Math.random() * chars.length)]);
    }

    return idChars.join('');
}
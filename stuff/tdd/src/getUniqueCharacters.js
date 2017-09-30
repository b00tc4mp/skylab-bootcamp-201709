function getUniqueCharacters(input) {
    var chars = '';

    for (var i = 0; i < input.length; i++) {
        if (chars.indexOf(input.charAt(i)) === -1) {
            chars += input[i];
        }
    }

    return chars;
}

function StringOperator() {

}

StringOperator.prototype.getLetterCombinationsFromWord = function(word) {
    if (!word) return;

    var combinations = '';
    for (var i = 0; i < word.length; i++) {
        for (var j = i; j < word.length; j++) {
            combinations += word.slice(i, j + 1) + ',';

        }
    }

    return combinations.slice(0, -1);
};


StringOperator.prototype.sortLettersFromWord = function(word) {
    if (!word) return;

    return word.split('').sort().join('');
};


// StringOperator.prototype.capitalizeFirstLetterOfWords = function(string) {
//     if (!string) return;

//     var word = [];

//     string = string.split(" ");

//     for (var i = 0; i < string.length; i++) {
//         word.push(string[i][0].toUpperCase() + '' + string[i].substr(1));
//     }

//     return word.join(' ');
// }

StringOperator.prototype.capitalizeFirstLetterOfWords = function(string) {
    if (!string) return;

    return string
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
};


// StringOperator.prototype.getLongestWord = function(string) {
// 	if (!string) return;

//     var words = string.split(' ');

//     return words.reduce(function(a, b) {
//         return a.length > b.length? a : b;
//     });
// };

StringOperator.prototype.getLongestWord = function(string) {
    if (!string)
        return;

    var words = string.split(' ');

    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
};
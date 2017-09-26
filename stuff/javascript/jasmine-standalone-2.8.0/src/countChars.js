// function countChars(str1) {
//     var chars = {};
//     str1.replace(/\S/g, function(l){
//         chars[l] = (isNaN(chars[l]) ? 1 : chars[l] + 1)
//         ;}
//         );
//     return chars;
// }

function countChars(text) {
	if (!text) return;

	var chars = {};

	var _chars = text.replace(/[|&;$%@\.\s"<>()+,]/g, '').toLowerCase().split('');

	for(var i in _chars) {
		var _char = _chars[i];

		if (chars[_char]) {
			chars[_char]++;
		} else {
			chars[_char] = 1;
		}
	}

	return chars;
}
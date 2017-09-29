describe('StringOperator', function() {
	var stringOperator;

	beforeEach(function() {
		stringOperator  = new StringOperator();
	})

	describe('getLetterCombinationsFromWord', function() {
		it ('should combine letters from word as expected', function() {
			var word = 'hello';
			var expected = 'h,he,hel,hell,hello,e,el,ell,ello,l,ll,llo,l,lo,o';

			var res = stringOperator.getLetterCombinationsFromWord(word);

			expect(res).toBe(expected);
		});

		it('should return nothing if input has no value', function() {
			var res = stringOperator.getLetterCombinationsFromWord();

			expect(res).toBeUndefined();
		});
	});

	describe('sortLettersFromWord', function() {
		it('should sort letters from word', function() {
			var word = 'barcelona';
			var expected = 'aabcelnor';

			var res = stringOperator.sortLettersFromWord(word);

			expect(res).toBe(expected);			
		});

		it('should return nothing if input has no value', function() {
			var res = stringOperator.sortLettersFromWord();

			expect(res).toBeUndefined();
		});
	});

	describe('capitalizeFirstLetterOfWords', function() {
		it('should set the first letter of eacth word to uppercase', function() {
			var word = 'hello world';
			var expected = 'Hello World';

			var res = stringOperator.capitalizeFirstLetterOfWords(word);

			expect(res).toBe(expected);			
		});

		it('should return nothing if input has no value', function() {
			var res = stringOperator.capitalizeFirstLetterOfWords();

			expect(res).toBeUndefined();
		});
	});


	describe('getLongestWord', function() {
		it('should return the longest word in string', function() {
			var string = 'Web Development Tutorial Metamorfosis';
			var expected = 'Metamorfosis';

			var res = stringOperator.getLongestWord(string);

			expect(res).toBe(expected);			
		});

		it('should return nothing if input has no value', function() {
			var res = stringOperator.getLongestWord();

			expect(res).toBeUndefined();
		});
	});

	// describe('countVowels', function() {
	// 	it('should sort letters from word', function() {
	// 		var srtring = 'barcelona';
	// 		var expected = 4;

	// 		var res = stringOperator.countVowels(srtring);

	// 		expect(res).toBe(expected);			
	// 	});

	// 	it('should return nothing if input has no value', function() {
	// 		var res = stringOperator.countVowels();

	// 		expect(res).toBeUndefined();
	// 	});
	// });
});
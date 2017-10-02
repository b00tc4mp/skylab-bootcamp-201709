describe('getUniqueCharacters', function(){
  it ('Should return the unique characters of a given string', function(){
      var input = 'thequickbrownfoxjumpsoverthelazydog';
      var expected = 'thequickbrownfxjmpsvlazydg';

      var res = getUniqueCharacters(input)

      expect(res).toBe(expected);
  });

  it ('Should return the unique characters of a given string (2)', function(){
      var input = 'helloworldhelloworld';
      var expected = 'helowrd';

      var res = getUniqueCharacters(input)

      expect(res).toBe(expected);
  });
});

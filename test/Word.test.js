const Word = require('../lib/Word'); //provides word class
const Letter = require('../lib/Letter'); //provides letter class

describe('Word class', () => { 
  it('Creates an array of Letter objects', () => { //tests to ensure an array of letters is created
    const word = new Word('hi'); //provides an new instance of a word

    expect(word.letters).toEqual( //saying to expect for the letters in the new word to expect a letter object that is equal to h
      expect.arrayContaining([expect.objectContaining({ char: 'h' })])
    );

    expect(word.letters[0]).toBeInstanceOf(Letter); //expect the first index of that word to be a letter object
  });

  describe('guessLetter', () => {
    it('Correct guess returns true', () => { //checks to ensure the word is correct
      expect(new Word('fish').guessLetter('i')).toBe(true); //expect for an instance in which the word if fish and the letter i is guessed its correct
    });

    it('Incorrect guess returns false', () => { //expect that for the word fish, if the letter o is input that it is wrong
      expect(new Word('fish').guessLetter('o')).toBe(false);
    });
  });

  describe('guessedCorrectly ', () => {
    it('returns true if all letters are correct', () => { //checks response of a correct guess
      const word = new Word('hi'); //provides an instance of a word
      word.guessLetter('h'); // right guess
      word.guessLetter('i'); //right guess
      expect(word.guessedCorrectly()).toBe(true); //expect for the response to be true given the correct guesses 
    });
    it('returns false if at least one letter is incorrect', () => { //checks response of incorrect guess 
      const word = new Word('hi'); //provides an instance of a word
      word.guessLetter('h'); //provides a right guess
      word.guessLetter('a'); //wrong guess 
      expect(word.guessedCorrectly()).toBe(false); //provides response to wrong guess
    });
  });
});

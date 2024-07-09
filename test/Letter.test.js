const Letter = require('../lib/Letter'); //imports the letter class

describe('Visibility', () => { //testing visibility
  it('Characters that are digits or letters should not be visible', () => { //this is testing to make sure answer is not shown
    expect(new Letter('j').visible).toBe(false); //gives an example
  });

  it('Correct guess makes character visible', () => { // this tests to make sure correctly guessed letter is shown 
    const letter = new Letter('j'); //provides a letter answer
    const { visible } = letter; //making sure what should be made visible is that correct guess

    // Correct guess
    letter.guess('j');

    // Letter was not originally visible
    expect(visible).toBe(false);

    // Letter is now visible
    expect(letter.visible).toBe(true);
  });

  it('Incorrect guess does not make character visible', () => { //testing to make sure incorrect guesses are not shown
    const letter = new Letter('j'); //provides correct guess
    const { visible } = letter; //making sure what should be made visible is that correct guess

    // Incorrect guess
    letter.guess('l');

    // Letter was not originally visible
    expect(visible).toBe(false);

    // Letter is still not visible
    expect(letter.visible).toBe(false);
  });

  it('Should return the guessed character when using toString', () => { //returns guessed letter
    const letter = new Letter('j'); //provides letter

    letter.guess('j'); //provides guess 

    expect(letter.toString()).toBe('j'); //show that letter
  });
});

describe('Letter class', () => {
  it("Characters that aren't digits or letters are instantly visible", () => { //ensures that anything other than letter or number is visible
    expect(new Letter('?').visible).toBe(true); //gives an example of what counts are being visible instatly
  });

  it('toString returns _ for letters', () => { //provides response of what should not be shown
    expect(new Letter('a').toString()).toBe('_');
  });

  describe('guess', () => {
    it('Correct guess returns true', () => {
      expect(new Letter('j').guess('j')).toBe(true); //provides response for when guess is right
    });

    it('Incorrect guess returns false', () => { //provides reesponse when guess is wrong
      expect(new Letter('j').guess('l')).toBe(false);
    });
  });

  describe('getSolution', () => { //provides response for solution
    it('returns character', () => {
      expect(new Letter('l').getSolution()).toBe('l');
    });
  });
});

const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = word.split("").map(char => new Letter(char));
  }

getSolution() {
    return this.letters
    .map(letter => letter.getSolution())
    .join("");
}

toString() {
    return this.letters.join("");
}

guessLetter(char) {
    let foundletter = false;
    this.letters.forEach(letter => {
        if(letter.guess(char)) {
            foundletter = true;
        }
    });
    return foundletter;
}

guessedCorrectly() {
    return this.letters.every(letter => letter.visible)
}
}

module.exports = Word;

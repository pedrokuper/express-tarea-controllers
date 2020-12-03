class PalindromeController {
  getPalindrome(req, res) {
    const word = req.params.word;
    const reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      res.send(`La palabra ${word} es palíndromo y se lee ${reversedWord}`);
    } else {
      res.send(`La frase ${word} NO es palíndromo y se lee ${reversedWord}`);
    }
  }
}

module.exports = PalindromeController;

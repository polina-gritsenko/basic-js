const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.direct = isDirect;
  }

  isUpperCase(letter) {
    var l = letter.charCodeAt();
    if (l >= 65 && l <= 90) {
      return true;
    } else {
      return false;
    }
  }

  isLowerCase(letter) {
    var l = letter.charCodeAt();
    if (l >= 97 && l <= 122) {
      return true;
    } else {
      return false;
    }
  }

  tabulaRecta = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy",
  };

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    var cypher = "";
    for (var i = 0, j = 0; i < message.length; i++) {
      var currentLetter = message[i];

      if (this.isUpperCase(currentLetter)) {
        var upperLetter =
          (currentLetter.charCodeAt() -
            65 +
            (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
          26;
        cypher += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (this.isLowerCase(currentLetter)) {
        var lowerLetter =
          (currentLetter.charCodeAt() -
            97 +
            (key[j % key.length].toLowerCase().charCodeAt() - 97)) %
          26;
        cypher += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    if (!this.direct) {
      cypher = cypher.split("").reverse().join("");
    }
    return cypher.toUpperCase();
  }

  decrypt(encryptedText, keyword) {
    if (encryptedText === undefined || keyword === undefined) {
      throw new Error("Incorrect arguments!");
    }
    encryptedText = encryptedText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    var decryptedText = "";
    var specialCharacterCount = 0;

    for (var i = 0; i < encryptedText.length; i++) {
      var keyLetter = (i - specialCharacterCount) % keyword.length;
      var keyRow = this.tabulaRecta[keyword[keyLetter]];

      if (keyRow.indexOf(encryptedText[i]) !== -1) {
        decryptedText += this.tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
      } else {
        decryptedText += encryptedText[i];
        specialCharacterCount++;
      }
    }
    if (!this.direct) {
      decryptedText = decryptedText.split("").reverse().join("");
    }
    return decryptedText.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};

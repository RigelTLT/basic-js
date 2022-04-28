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
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = !flag;
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error("Incorrect arguments!")
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arrMessage = message.split("");
    const arrKey = key.split("");
    let arrCryptIndex = [];
    let arrCrypt = [];
    const generate = function* (arrKey) {
      let i = 0;
      let length = arrKey.length;
      while (true) {
        yield arrKey[i];
        i++;
        if (i === length) i = 0;
      }
    };
  
    const arrayLoop = generate(arrKey);
    arrMessage.forEach(function (element) {
      if (alphabet.indexOf(element.toUpperCase()) !== -1) {
        arrCryptIndex.push(
          (alphabet.indexOf(element.toUpperCase()) +
            alphabet.indexOf(arrayLoop.next().value.toUpperCase())) % 26);
      } else {
        arrCryptIndex.push(element);
      }
    });
   
    arrCrypt = arrCryptIndex.map(function(element) {
      if(typeof element === 'string') {
        return element;
      }else{
        return alphabet[element];
      }
    });
    if(this.flag === true){
      return arrCrypt.reverse().join('');
    }
    return arrCrypt.join("");
  }
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!message || !key){
      throw new Error("Incorrect arguments!")
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const arrMessage = message.split("");
    const arrKey = key.split("");
    let arrCryptIndex = [];
    let arrCrypt = [];
    const generate = function* (arrKey) {
      let i = 0;
      let length = arrKey.length;
      while (true) {
        yield arrKey[i];
        i++;
        if (i === length) i = 0;
      }
    };
    const arrayLoop = generate(arrKey);
    arrMessage.forEach(function (element) {
      if (alphabet.indexOf(element.toUpperCase()) !== -1) {
        arrCryptIndex.push(
          (alphabet.indexOf(element.toUpperCase()) -
            alphabet.indexOf(arrayLoop.next().value.toUpperCase())) % 26);
      } else {
        arrCryptIndex.push(element);
      }
    });
    arrCrypt = arrCryptIndex.map(function(element) {
      if(typeof element === 'string') {
        return element;
      }else{
        if(element < 0){
          element = 26-Math.abs(element);
        }
        return alphabet[element];
      }
    });
    if(this.flag === true){
      return arrCrypt.reverse().join('');
    }
    return arrCrypt.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

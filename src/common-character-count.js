const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const s1Arr = s1.split("");
  const s2Arr = s2.split("");
  let sum = 0;
  for(let i = 0; i < s1Arr.length; i++) {
    for(let j = 0; j < s2Arr.length; j++) {
      if(s1Arr[i] === s2Arr[j]){
        sum++;
        s2Arr.splice(j, 1)
        break;
      }
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};

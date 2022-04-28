const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = String(n).split('');
  let provArray = array.map((element, i) => String(n).replace(String(element), ''));
  return Math.max.apply(null, provArray);
}

module.exports = {
  deleteDigit
};

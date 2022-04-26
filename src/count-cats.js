const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // countthrow new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let total = 0;
  matrix.forEach(function(line) {
    line.forEach(function(element){
      if(element === '^^'){
        total++;
      }
    })
  })
  return total;
}

module.exports = {
  countCats
};

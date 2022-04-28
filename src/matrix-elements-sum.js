const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;
  matrix.forEach(function(el1,i1){
    el1.forEach(function(el2,i2){
      if(i1 === 0){
        sum += el2;
      }
      else{
        if(matrix[i1-1][i2] !== 0){
          sum += el2;
        }
      } 
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};

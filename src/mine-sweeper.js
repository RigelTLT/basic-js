const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let total = [];
  for (let index1 = 0; index1 < matrix.length; index1++){
    total.push([]);
  }
  //matrix.map(function(el1, index1)
  for (let index1 = 0; index1 < matrix.length; index1++){
    //el1.forEach(function(el2, index2)
    for (let index2 = 0; index2 < matrix[index1].length; index2++){
      let num = 0;
      total[index1][index2] = num;
      let minArr = index2 - 1;
      if(minArr < 0){
        minArr = 0;
      }
      let maxArr = index2 + 1;
      if(maxArr > matrix[index1].length-1){
        maxArr = index2;
      }
      let minCol = index1 - 1;
      if(minCol < 0){
        minCol = 0;
      }
      let maxCol = index1 + 1;
      if(maxCol > matrix.length-1){
        maxCol = index1;
      }
      if(matrix[minCol][minArr] === true && index1 !== minCol &&  index2 !== minArr){
        num++;
      }
      if(matrix[minCol][index2] === true && index1 !== minCol){
        num++;
      }
      if(matrix[minCol][maxArr] === true && index1 !== minCol &&  index2 !== maxArr){
        num++;
      }

      if(matrix[index1][minArr] === true &&  index2 !== minArr){
        num++;
      }
      if(matrix[index1][maxArr] === true && index2 !== maxArr){
        num++;
      }

      if(matrix[maxCol][minArr] === true && index1 !== maxCol &&  index2 !== minArr){
        num++;
      }
      if(matrix[maxCol][index2] === true && index1 !== maxCol){
        num++;
      }
      if(matrix[maxCol][maxArr] === true && index1 !== maxCol &&  index2 !== maxArr){
        num++;
      }
      total[index1][index2] = num;
    }
  }
  return total;
}

module.exports = {
  minesweeper
};

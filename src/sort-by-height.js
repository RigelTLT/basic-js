const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr1 = [];
  arr.forEach(function(value){
    if(value !== -1){
      arr1.push(value);
    }
  })
  arr1 = arr1.sort(function(a, b) {
    return a - b;
  });
  arr.forEach(function(value, index){
    if(value === -1){
      arr1.splice(index, 0, value);
    }
  })
  return arr1;
}

module.exports = {
  sortByHeight
};

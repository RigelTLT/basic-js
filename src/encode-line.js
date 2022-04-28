const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = str.split('');
  let total = '';
  let num = 0;
  arr.forEach(function(element, index){
    if(element === arr[index+1]){
      num++;
    }
    if(element !== arr[index+1]){
      if(num !== 0){
        num++;
        total += num+element;
        num = 0;
      }
      else{
        num = 0;
        total += element;
      }
    }
  })
  return total;
}
module.exports = {
  encodeLine
};

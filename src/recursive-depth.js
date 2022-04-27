const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sum = 1;
    arr.forEach(function(value) {
      if(typeof value === 'object'){
        sum++;
        constArr(value, sum)
      }
    })
    return sum;
  }
  constArr(arr, sum) {
    arr.forEach(function(value) {
      if(typeof value === 'object'){
        sum++;
        constArr(value, sum)
      }
    })
    return sum;
  }
}

module.exports = {
  DepthCalculator
};

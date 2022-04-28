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
const array = (item) => item.some(value =>Array.isArray(value))
class DepthCalculator {
  calculateDepth(item) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let sum = 1;
    if(array(item)){
      const newArr = item.reduce((acc, val) => acc.concat(val), []);
      return sum + this.calculateDepth(newArr);
    }
    return sum;
}
}
module.exports = {
  DepthCalculator
};

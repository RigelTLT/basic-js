const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    if(Object.prototype.toString.call(arr) !== '[object Array]'){
      throw new Error("'arr' parameter must be an instance of the Array!"); 
    }
  let totalarr = [];
  let arr2 = arr;
  for (let i = 0; i < arr2.length; i++) {
    if((i===0 && (arr2[i] === "--double-prev" || arr2[i] === "--discard-prev")) || (i===arr2.length-1 && (arr2[i] === "--discard-next" || arr2[i] === "--double-next"))){
    }
    else{
    switch (arr2[i]) {
      case "--discard-prev":
        totalarr.splice(i - 1, 1);
        break;
      case "--discard-next":
        arr2.splice(i + 1, 1);
        i++;
        break;
      case "--double-next":
        totalarr.push(arr2[i + 1]);
        break;
      case "--double-prev":
        totalarr.push(arr2[i - 1]);
        break;
      default:
        totalarr.push(arr2[i]);
        break;
    }}
    
  }
  return totalarr;
}

module.exports = {
  transform,
};

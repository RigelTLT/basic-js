const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let total = {}; 
  let array = domains.map((elem) => elem.split('.'))
  array = [...new Set([].concat(...array))];
  array = array.sort();
  let backElem = '';
  let tegArray = array.map(function(elem, i) {
  if(i ===0){
    elem = '.'+elem;
    backElem =elem;
    return elem;
  }
  else{
    elem = backElem+'.'+elem
    backElem =elem;
    return elem;
  }
});
let forArray = array.map(function(elem, i) {
  if(i ===0){
    elem = '.'+elem;
    backElem =elem;
    return elem;
  }
  else{
    if(i ===1){
      elem = elem+backElem
    }
    else{
      elem = elem+'.'+backElem
    }
    backElem =elem;
    return elem;
  }
});

    forArray.forEach(function (element1, index1){
    let sum = 0;
    domains.forEach(function (element2){
      if(element2.indexOf(element1) !== -1){
        sum++;
        total[`${tegArray[index1]}`] = sum;
      }
    })
  })
  return total;
}

module.exports = {
  getDNSStats
};

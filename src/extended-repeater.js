const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrtotal = [];
  let arrAddition= [];
  let stringtotal = '';
  let stringAddition= '';
  let repeatTimes = 1;
  let separator = '';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '';
  if(typeof str !== 'string'){
    str = String(str);
  }
  if(options.hasOwnProperty('separator')){
    separator = options.separator;
  }
  else{
    separator = '+';
  }
  if(options.hasOwnProperty('addition')){
    if(typeof options.addition !== 'string'){
      addition = String(options.addition);
    }
    else{
      addition = options.addition;
    }
  }
  if(options.hasOwnProperty('repeatTimes')){
    repeatTimes = options.repeatTimes;
  }
  if(options.hasOwnProperty('additionRepeatTimes')){
    additionRepeatTimes = options.additionRepeatTimes;
  }
  if(options.hasOwnProperty('additionSeparator')){
    additionSeparator = options.additionSeparator;
  }
  else{
    additionSeparator = '|';
  }
  for(let i = 0; i <additionRepeatTimes; i++) {
    arrAddition.push(addition);
  }
  stringAddition = arrAddition.join(additionSeparator);
  for(let i = 0; i <repeatTimes; i++) {
    arrtotal.push(str+stringAddition);
  }
  stringtotal = arrtotal.join(separator);
  return stringtotal;
}

module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.log(date);
 if(!date){
    return 'Unable to determine the time of year!';
  }
  else{
    
  if(isNaN(Date.parse(date)) || Object.prototype.toString.call(date) !== "[object Date]" || String(date.getMonth) !== 'function getMonth() { [native code] }'){
    throw new Error('Invalid date!');
  }
  else{
    try{
    let formatMounth = date.getMonth(); 
  if(formatMounth<2 || (formatMounth>10 && formatMounth<12)){
    return 'winter'
  }
  if(formatMounth>1 && formatMounth<5){
    return 'spring'
  }
  if(formatMounth>4 && formatMounth<8){
    return 'summer'
  }
  if(formatMounth>7 && formatMounth<11){
    return 'autumn'
  }
  if(formatMounth>12 && formatMounth<0 ){
    throw new Error('Invalid date!');
  }
  }
  catch{
     throw new Error('Invalid date!');
  }
}
}
}

module.exports = {
  getSeason
};

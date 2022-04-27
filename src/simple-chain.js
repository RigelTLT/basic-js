const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.push(value);
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof position !== 'number' || !Number.isInteger(position)){
      throw new Error("You can't remove incorrect link!");
    }
    return this.chain.splice(position, 1);
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain = this.chain.reverse();
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let totalChain = this.chain.join(' )~~( ');
    totalChain = "( "+totalChain+" )";
    return totalChain;
  }
};

module.exports = {
  chainMaker
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.length;
    return this;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof position === "number" && Number.isInteger(position)) {
      if (position < 1 || position > this.chain.length) {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
    return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let totalChain = this.chain.join(" )~~( ");
    totalChain = "( " + totalChain + " )";
    this.chain = [];
    return totalChain;
  },
};

module.exports = {
  chainMaker,
};

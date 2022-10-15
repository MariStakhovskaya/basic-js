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
 * let count = 1
 arr.map(el => Array.isArray(el) ? count += this.calculateDepth(el) : count)
 return count
 */
class DepthCalculator {

  calculateDepth( arr ) {
    let counter = 1;
    let max = 0
    for (const i of arr) {
      if (Array.isArray(i)) {
        max = Math.max(this.calculateDepth(i), max);
      }
    }
    return counter + max;

    }



}

module.exports = {
  DepthCalculator
};

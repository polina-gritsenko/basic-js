const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringValue = n.toString();
  let maxValue = +stringValue.slice(1);
  for (let i = 1; i < stringValue.length; i++) {
    let current = +(stringValue.slice(0, i) + stringValue.slice(i + 1));
    if (current > maxValue) {
      maxValue = current;
    }
  }
  return maxValue;
}

module.exports = {
  deleteDigit,
};

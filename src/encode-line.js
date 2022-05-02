const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      count++;
    } else {
      if (count > 1) result.push(count);
      result.push(str.charAt(i));
      count = 1;
    }
  }
  return result.join("");
}

module.exports = {
  encodeLine,
};

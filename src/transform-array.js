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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const transformations = {
    discardNext: "--discard-next",
    discardPrev: "--discard-prev",
    doubleNext: "--double-next",
    doublePrev: "--double-prev",
  };
  let array = arr.slice();
  let res = [];
  let modified = false;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    switch (current) {
      case transformations.discardNext:
        i++;
        modified = true;
        break;
      case transformations.discardPrev:
        if (!modified) {
          res.pop();
        }
        break;
      case transformations.doubleNext:
        if (array[i + 1]) array.splice(i + 1, 0, array[i + 1]);
        break;
      case transformations.doublePrev:
        if (res.length > 0 && !modified) res.push(array[i - 1]);
        break;
      default:
        modified = false;
        res.push(current);
    }
  }
  return res;
}

module.exports = {
  transform,
};

const { NotImplementedError } = require("../extensions/index.js");

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
  const string = `${str}`;

  let separator = options.separator ? options.separator : "+";
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";

  let stringWithAddition = string;
  if (options.hasOwnProperty("addition")) {
    const additionString = `${options.addition}`;
    stringWithAddition += Array(options.additionRepeatTimes)
      .fill(additionString)
      .join(additionSeparator);
  }

  const array = Array(options.repeatTimes).fill(stringWithAddition);
  return array.join(separator);
}

module.exports = {
  repeater,
};

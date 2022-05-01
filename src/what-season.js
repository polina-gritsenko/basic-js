const { NotImplementedError } = require("../extensions/index.js");

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
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (
    Object.prototype.toString.call(date) !== "[object Date]" ||
    typeof date.getMonth !== "function"
  ) {
    throw new Error("Invalid date!");
  }
  let month;

  try {
    date.toDateString();
    month = (date.getMonth() + 1).toString();
  } catch (error) {
    throw new Error("Invalid date!");
  }

  var season = "";
  switch (month) {
    case "12":
    case "1":
    case "2":
      season = "winter";
      break;
    case "3":
    case "4":
    case "5":
      season = "spring";
      break;
    case "6":
    case "7":
    case "8":
      season = "summer";
      break;
    case "9":
    case "10":
    case "11":
      season = "fall";
      break;
    default:
      throw new Error("Invalid date!");
  }

  return season;
}

module.exports = {
  getSeason,
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let name = "";

  var i = 0,
    len = members.length;
  while (i < len) {
    let current = members[i];
    if (typeof current === "string") {
      name += current.trim().charAt(0).toUpperCase();
    }
    i++;
  }
  return name.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};

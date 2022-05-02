const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let fileNames = {};
  const constructFileName = (x, number) => x + "(" + number + ")";

  return names.map(function (name) {
    let suffixNumber = fileNames[name] || 0;

    fileNames[name] = suffixNumber + 1;

    if (!suffixNumber) return name;

    while (fileNames[constructFileName(name, suffixNumber)]) suffixNumber++;

    fileNames[constructFileName(name, suffixNumber)] = 1;
    return constructFileName(name, suffixNumber);
  });
}

module.exports = {
  renameFiles,
};

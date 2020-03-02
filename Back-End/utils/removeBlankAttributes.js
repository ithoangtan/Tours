/**
 * Remove blank attributes from an Object
 * @param {*} Object
 */
exports.remove = object => {
  for (const key in object) {
    if (object[key] === null || object[key] === undefined) {
      delete object[key]; // eslint-disable-line
    }
  }
  return object;
};

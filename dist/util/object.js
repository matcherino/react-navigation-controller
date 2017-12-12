'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
/**
 * Merge sources into target
 *
 * @param {object} target
 * @param {arguments} soutces
 * @return {object}
 */
function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }
  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }
    var from = Object(nextSource);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }
  return to;
}
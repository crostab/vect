'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {Object} o
 * @param {*[]} keys
 */
function select(o, keys) {
  const ob = {};

  for (const k in o) if (keys.includes(k)) ob[k] = o[k];

  return ob;
}

exports.select = select;

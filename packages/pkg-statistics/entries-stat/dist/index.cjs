'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataTypes = require('@typen/enum-data-types');

const stat = function (entries, l) {
  l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length);
  const {
    key,
    value
  } = this;
  let i = 0,
      j = 0,
      k = key.init ? key.init() : entries[i++][0],
      v = value.init ? value.init() : entries[j++][1];
  const keyAcc = key.acc,
        valueAcc = value.acc;
  if (i < j) k = keyAcc(k, entries[i++][0]);
  if (j < i) v = valueAcc(v, entries[j++][1]);

  for (let entry; i < l && (entry = entries[i]); i++) {
    k = keyAcc(k, entry[0], i);
    v = valueAcc(v, entry[1], i);
  }

  if (key.to) k = key.to(k);
  if (value.to) v = value.to(v);
  return [k, v];
};
/**
 *
 * @param {Object|Function} key
 * @param {*|Function|function(*[],number?):*} [key.init] - create a container to hold statByInitVal
 * @param {Function|function(*,number?):*} [key.acc] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [key.to] - method to to statByInitVal value from the container
 * @param {Object|Function} value
 * @param {*|Function|function(*[],number?):*} [value.init] - create a container to hold statByInitVal
 * @param {Function|function(*,number?):*} [value.acc] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [value.to] - method to to statByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */

const Stat = ({
  key,
  value
} = {}) => {
  if (typeof key === enumDataTypes.FUN) key = {
    acc: key
  };
  if (typeof value === enumDataTypes.FUN) value = {
    acc: value
  };
  return stat.bind({
    key,
    value
  });
};

exports.Stat = Stat;
exports.stat = stat;

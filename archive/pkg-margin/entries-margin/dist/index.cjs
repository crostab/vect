'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param {*[]} entries
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
const marginCopy = (entries, h, t, l) => {
  const kvs = Array(l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length)),
        s = l - t;
  let ent;

  for (--h; h >= 0; h--) kvs[h] = [(ent = entries[h])[0], ent[1]];

  for (--l; l >= s; l--) kvs[l] = [(ent = entries[l])[0], ent[1]];

  return kvs;
};

/**
 *
 * @param {*[]} entries
 * @param {function(*,number?):*} keyMapper
 * @param {function(*,number?):*} valueMapper
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
const marginMapper = (entries, keyMapper, valueMapper, h, t, l) => {
  const ve = Array(l = l ?? (entries === null || entries === void 0 ? void 0 : entries.length)),
        s = l - t;
  let ent;

  for (--h; h >= 0; h--) ve[h] = [keyMapper((ent = entries[h])[0], h), valueMapper(ent[1], h)];

  for (--l; l >= s; l--) ve[l] = [keyMapper((ent = entries[l])[0], l), valueMapper(ent[1], l)];

  return ve;
};

/**
 *
 * @param {*[]} entries
 * @param {function(*,number?):*} keyMapper
 * @param {function(*,number?):*} valueMapper
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - entries length
 * @returns {*[]}
 */
const marginMutate = (entries, keyMapper, valueMapper, h, t, l) => {
  l = l || (entries === null || entries === void 0 ? void 0 : entries.length);
  let s = l - t,
      ent;

  for (--h; h >= 0; h--) (ent = entries[h])[0] = keyMapper(ent[0], h), ent[1] = valueMapper(ent[1], h);

  for (--l; l >= s; l--) (ent = entries[l])[0] = keyMapper(ent[0], l), ent[1] = valueMapper(ent[1], l);

  return entries;
};

exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;

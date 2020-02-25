'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const zipper = (oa, ob, fn) => {
  const ot = {};

  for (let k in oa) if (Object.hasOwnProperty.call(oa, k)) ot[k] = fn(oa[k], ob[k]);

  return ot;
};

const mutazip = (oa, ob, fn) => {
  for (let k in oa) if (Object.hasOwnProperty.call(oa, k)) oa[k] = fn(oa[k], ob[k]);

  return oa;
};

exports.mutazip = mutazip;
exports.zipper = zipper;

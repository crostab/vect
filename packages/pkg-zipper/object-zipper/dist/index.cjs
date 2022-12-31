'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const zipper = (oa, ob, fn) => {
  const zip = {};
  for (let k in oa) zip[k] = fn(oa[k], ob[k]);
  return zip;
};

const mutazip = (oa, ob, fn) => {
  for (let k in oa) oa[k] = fn(oa[k], ob[k]);
  return oa;
};

const iterzip = (oa, ob, action) => {
  for (let k in oa) action(oa[k], ob[k]);
  return void 0;
};

exports.iterzip = iterzip;
exports.mutazip = mutazip;
exports.zipper = zipper;

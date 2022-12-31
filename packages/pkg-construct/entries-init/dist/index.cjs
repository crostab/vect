'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorMapper = require('@vect/vector-mapper');
var vectorZipper = require('@vect/vector-zipper');

const EntryFactory = {
  voidEntry() {
    return [undefined, undefined];
  }
};
const draft = size => Array(size).fill(null).map(EntryFactory.voidEntry);
const wind = (keys, values) => vectorZipper.zipper(keys, values, (k, v) => [k, v]);

/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {[string,*][]}
 */
const iso = (keys, value) => vectorMapper.mapper(keys, key => [key, value]);

exports.draft = draft;
exports.iso = iso;
exports.wind = wind;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumDataTypes = require('@typen/enum-data-types');
var enumObjectTypes = require('@typen/enum-object-types');
var typ = require('@typen/typ');

function clone(node) {
  const t = typeof node;
  if (t === enumDataTypes.STR) return node;
  if (t === enumDataTypes.NUM || t === enumDataTypes.BIG) return node;
  if (t === enumDataTypes.FUN) return node;

  if (t === enumDataTypes.OBJ) {
    const pt = typ.typ(node);
    if (pt === enumObjectTypes.ARRAY) return cloneArray(node);
    if (pt === enumObjectTypes.OBJECT) return cloneObject(node);
    if (pt === enumObjectTypes.DATE) return new Date(+node);
    if (pt === enumObjectTypes.MAP) return cloneMap(node);
    if (pt === enumObjectTypes.SET) return cloneSet(node);
    return node;
  }

  if (t === enumDataTypes.BOO) return node;
  if (t === enumDataTypes.UND || t === enumDataTypes.SYM) return node;
  return node;
}
/**
 * @param {*[]} o
 * @return {*[]}
 */

function cloneArray(o) {
  return o.map(clone);
}
/**
 * TODO: Unable to clone circular and nested object.
 * @param {{}} o
 * @return {{}}
 */

function cloneObject(o) {
  const t = {};

  for (let k in o) t[k] = clone(o[k]);

  return t;
}
/**
 * @param {Map<*, *>} o
 * @return {Map<*, *>}
 */

function cloneSet(o) {
  return new Set(cloneArray([...o]));
}
/**
 * @param {Map<*, *>} o
 * @return {Map<*, *>}
 */

function cloneMap(o) {
  return new Map([...o.entries()].map(([k, v]) => [k, clone(v)]));
}

exports.clone = clone;
exports.cloneArray = cloneArray;
exports.cloneMap = cloneMap;
exports.cloneObject = cloneObject;
exports.cloneSet = cloneSet;

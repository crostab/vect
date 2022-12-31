import { STR, NUM, BIG, FUN, BOO, UND, SYM, OBJ } from '@typen/enum-data-types';
import { ARRAY, OBJECT, DATE, SET, MAP } from '@typen/enum-object-types';
import { typ } from '@typen/typ';

function clone(node) {
  const t = typeof node;
  if (t === STR) return node;
  if (t === NUM || t === BIG) return node;
  if (t === FUN) return node;
  if (t === BOO) return node;
  if (t === UND || t === SYM) return node;
  if (t === OBJ) {
    const pt = typ(node);
    if (pt === ARRAY) return cloneArray(node);
    if (pt === OBJECT) return cloneObject(node);
    if (pt === DATE) return new Date(+node);
    if (pt === SET) return cloneSet(node);
    if (pt === MAP) return cloneMap(node);
    return node;
  }
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

export { clone, cloneArray, cloneMap, cloneObject, cloneSet };

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const iterateKeys = function (o, fn) {
  for (let k in o) fn.call(this, k);
};
function iterateValues(o, fn) {
  for (let k in o) fn.call(this, o[k]);
}
const iterateEntries = function (o, fn, l) {
  const entries = Object.entries(o);
  l = l ?? entries.length;

  for (let i = 0; i < l; i++) fn.call(this, entries[i], i);
};

function mapKey(o, keyToKey) {
  const t = {};

  for (let k in o) {
    const k2 = keyToKey.call(this, k);
    t[k2] = o[k];
  }

  return t;
}
function mapVal(o, valToVal) {
  const t = {};

  for (let k in o) {
    t[k] = valToVal.call(this, o[k]);
  }

  return t;
}
function mapEntry(o, kvToEnt) {
  const t = {};

  for (let k in o) {
    const [k2, v2] = kvToEnt.call(this, k, o[k]);
    t[k2] = v2;
  }

  return t;
}
function mapEntries(o, entToEnt) {
  const t = {};
  let i = 0;

  for (let k in o) {
    const [tk, tv] = entToEnt.call(this, [k, o[k]], i++);
    t[tk] = tv;
  }

  return t;
}
function mapKeyVal(o, keyToVal) {
  const t = {};

  for (let k in o) {
    t[k] = keyToVal.call(this, k, o[k]);
  }

  return t;
}

function mutate(o, fn) {
  for (let k in o) o[k] = fn.call(this, o[k]);

  return o;
}

function* indexedOf(o) {
  if (o) for (let k in o) {
    yield [k, o[k]];
  }
}
function* indexedBy(o, by) {
  if (!by) {
    return yield* indexedOf(o);
  }

  if (o) for (let k in o) {
    const v = o[k];
    if (by(k, v)) yield [k, v];
  }
}
function* indexedTo(o, to) {
  if (!to) {
    return yield* indexedOf(o);
  }

  if (o) for (let k in o) {
    yield to(k, o[k]);
  }
}
function* indexed(o, by, to) {
  if (!to) {
    return yield* !by ? indexedOf(o) : indexedBy(o, by);
  }

  if (o) for (let k in o) {
    const v = o[k];
    if (by(k, v)) yield to(k, v);
  }
}

exports.indexed = indexed;
exports.indexedBy = indexedBy;
exports.indexedOf = indexedOf;
exports.indexedTo = indexedTo;
exports.iterate = iterateValues;
exports.iterateEntries = iterateEntries;
exports.iterateKeys = iterateKeys;
exports.iterateValues = iterateValues;
exports.mapEntries = mapEntries;
exports.mapEntry = mapEntry;
exports.mapKey = mapKey;
exports.mapKeyVal = mapKeyVal;
exports.mapKeys = mapKey;
exports.mapVal = mapVal;
exports.mapValues = mapVal;
exports.mapper = mapVal;
exports.mutate = mutate;

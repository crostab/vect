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
    const [k2, v2] = entToEnt.call(this, [k, o[k]], i++);
    t[k2] = v2;
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

// from x => typeof x
const FUN = 'function';

function* indexedOf(o) {
  if (o) for (let k in o) {
    yield [k, o[k]];
  }
}
function* indexedBy(o, by) {
  if (o) for (let k in o) {
    const v = o[k];
    if (by(k, v)) yield [k, v];
  }
}
function* indexedTo(o, to) {
  if (o) for (let k in o) {
    yield to(k, o[k]);
  }
}
function* indexed(o, by, to) {
  if (!by && !to) return yield* indexedOf(o);
  if (!to) return yield* indexedBy(o, by);
  if (o) for (let k in o) {
    const v = o[k];
    if (by(k, v)) yield to(k, v);
  }
}
/**
 * @param {Object<string,any>} o
 * @param {function|{ [by]:function, to:function }} [conf]
 * @returns {Generator<*, void, *>}
 */

function* indexedVia(o, conf) {
  const by = conf === null || conf === void 0 ? void 0 : conf.by,
        to = (conf === null || conf === void 0 ? void 0 : conf.to) ?? conf;
  yield* typeof by === FUN ? typeof to === FUN ? indexed(o, by, to) : indexedBy(o, by) : typeof to === FUN ? indexedTo(o, to) : indexedOf(o);
}

export { indexedBy as filterIndexed, indexedVia as filterMappedIndexed, indexed, indexedBy, indexedOf, indexedTo, indexedVia, iterateValues as iterate, iterateEntries, iterateKeys, iterateValues, mapEntries, mapEntry, mapKey, mapKeyVal, mapKeyVal as mapKeyValue, mapKey as mapKeys, mapVal, mapVal as mapValues, indexedTo as mappedIndexed, mapVal as mapper, mutate, indexedOf as simpleIndexed };

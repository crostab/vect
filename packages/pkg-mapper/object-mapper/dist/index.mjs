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

function mapValues(o, valToVal) {
  const t = {};

  for (let k in o) {
    t[k] = valToVal.call(this, o[k]);
  }

  return t;
}
function mapKeys(o, keyToKey) {
  const t = {};

  for (let k in o) {
    const k2 = keyToKey.call(this, k);
    t[k2] = o[k];
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

function mutate(o, fn) {
  for (let k in o) o[k] = fn.call(this, o[k]);

  return o;
}

// from x => typeof x
const FUN = 'function';

function* simpleIndexed(o) {
  if (o) for (let k in o) {
    yield [k, o[k]];
  }
}
function* filterIndexed(o, filter) {
  if (o) for (let k in o) {
    const v = o[k];
    if (filter(k, v)) yield [k, v];
  }
}
function* mappedIndexed(o, mapper) {
  if (o) for (let k in o) {
    yield mapper(k, o[k]);
  }
}
function* filterMappedIndexed(o, filter, mapper) {
  if (o) for (let k in o) {
    const v = o[k];
    if (filter(k, v)) yield mapper(k, v);
  }
}
/**
 *
 * @param {Object<string,Object<string,any>>} o
 * @param {function|{ [by]:function, to:function }} [conf]
 * @returns {Generator<*, void, *>}
 */

function* indexed(o, conf) {
  const by = conf === null || conf === void 0 ? void 0 : conf.by,
        to = (conf === null || conf === void 0 ? void 0 : conf.to) ?? conf;

  if (typeof by === FUN) {
    if (typeof to === FUN) {
      yield* filterMappedIndexed(o, by, to);
    } else {
      yield* filterIndexed(o, by);
    }
  } else {
    if (typeof to === FUN) {
      yield* mappedIndexed(o, to);
    } else {
      yield* simpleIndexed(o);
    }
  }
}

export { filterIndexed, filterMappedIndexed, indexed, iterateValues as iterate, iterateEntries, iterateKeys, iterateValues, mapEntries, mapKeys, mapValues, mappedIndexed, mapValues as mapper, mutate, simpleIndexed };

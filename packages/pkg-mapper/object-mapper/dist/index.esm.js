function iterate(o, fn) {
  for (let k in o) if (Object.hasOwnProperty.call(o, k)) fn.call(this, o[k]);
}

const iterateKeys = function (o, fn) {
  for (let k in o) if (Object.hasOwnProperty.call(o, k)) fn.call(this, k);
};

const iterateEntries = function (o, fn, l) {
  var _l;

  const ents = Object.entries(o);
  l = (_l = l) !== null && _l !== void 0 ? _l : ents.length;

  for (let i = 0; i < l; i++) fn.call(this, ents[i], i);
};

const mapper = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[k] = fn(o[k]);

  return ob;
};

const mutate = (o, fn) => {
  for (let k in o) if (Object.hasOwnProperty.call(o, k)) o[k] = fn(o[k]);

  return o;
};

const mapKeys = (o, fn) => {
  const ob = {};

  for (let k in o) if (Object.hasOwnProperty.call(o, k)) ob[fn(k)] = o[k];

  return ob;
};

const mapEntries = (o, fn, l) => {
  var _l;

  const ob = {},
        ents = Object.entries(o);
  l = (_l = l) !== null && _l !== void 0 ? _l : ents.length;

  for (let i = 0, k, v; i < l; i++) {
    [k, v] = fn(ents[i], i);
    ob[k] = v;
  }

  return ob;
};

export { iterate, iterateEntries, iterateKeys, mapEntries, mapKeys, mapper, mutate };

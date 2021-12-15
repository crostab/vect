function iterate(o, fn) {
  for (let k in o) fn.call(this, o[k]);
}

const iterateKeys = function (o, fn) {
  for (let k in o) fn.call(this, k);
};

const iterateEntries = function (o, fn, l) {
  const ents = Object.entries(o);
  l = l ?? ents.length;

  for (let i = 0; i < l; i++) fn.call(this, ents[i], i);
};

function mapper(o, fn) {
  const ob = {};

  for (let k in o) ob[k] = fn.call(this, o[k]);

  return ob;
}

function mutate(o, fn) {
  for (let k in o) o[k] = fn.call(this, o[k]);

  return o;
}

function mapKeys(o, fn) {
  const ob = {};

  for (let k in o) ob[fn.call(this, k)] = o[k];

  return ob;
}

function mapEntries(o, fn, l) {
  const ob = {},
        ents = Object.entries(o);
  l = l ?? ents.length;

  for (let i = 0, k, v; i < l; i++) {
    [k, v] = fn.call(this, ents[i], i);
    ob[k] = v;
  }

  return ob;
}

export { iterate, iterateEntries, iterateKeys, mapEntries, mapKeys, mapper, mutate };

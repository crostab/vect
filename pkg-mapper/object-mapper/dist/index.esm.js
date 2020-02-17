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
  const ob = {},
        ents = Object.entries(o);
  l = l || ents.length;

  for (let i = 0, k, v; i < l; i++) {
    [k, v] = fn(ents[i], i);
    ob[k] = v;
  }

  return ob;
};

export { mapEntries, mapKeys, mapper, mutate };

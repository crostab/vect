import { mapper } from '@vect/vector-mapper';

const voidEntry = () => [ undefined, undefined ];

const draft = (length) => Array.from({ length }, voidEntry);

const wind = (keys, vals) => {
  const hi = Math.min(keys.length, vals.length);
  const entries = Array(hi);
  for (let i = 0; i < hi; i++) entries[i] = [ keys[i], vals[i] ];
  return entries
};

/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {[string,*][]}
 */
const iso = (keys, value) => mapper(keys, key => [ key, value ]);

const unwind = (entries) => {
  const hi = entries?.length;
  if (!hi) return []
  const ks = Array(hi), vs = Array(hi);
  for (let i = 0, ent; i < hi; i++) { ent = entries[i], ks[i] = ent[0], vs[i] = ent[1]; }
  return [ ks, vs ]
};

export { draft, iso, unwind, voidEntry, wind };

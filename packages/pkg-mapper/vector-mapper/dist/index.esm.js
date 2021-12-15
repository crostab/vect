const iterate = function (vec, fn, l) {
  l = l || (vec == null ? void 0 : vec.length);

  for (let i = 0; i < l; i++) fn.call(this, vec[i], i);
};

const reviter = function (vec, fn, l) {
  l = l || (vec == null ? void 0 : vec.length);

  for (--l; l >= 0; l--) fn.call(this, vec[l], l);
};

const mapper = function (vec, fn, l) {
  l = l || (vec == null ? void 0 : vec.length);
  const ve = Array(l);

  for (--l; l >= 0; l--) ve[l] = fn.call(this, vec[l], l);

  return ve;
};

function mutate(vec, fn, l) {
  l = l || (vec == null ? void 0 : vec.length);

  for (--l; l >= 0; l--) vec[l] = fn.call(this, vec[l], l);

  return vec;
}

export { iterate, mapper, mutate, reviter };

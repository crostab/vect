const mapper = (ar, fn, l) => {
  l = l || ar && ar.length;
  const vec = Array(l);

  for (--l; l >= 0; l--) vec[l] = fn(ar[l], l);

  return vec;
};

const mutate = (ar, fn, l) => {
  l = l || ar && ar.length;

  for (--l; l >= 0; l--) ar[l] = fn(ar[l], l);

  return ar;
};

export { mapper, mutate };

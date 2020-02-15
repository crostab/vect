const zipper = (ea, eb, keyFn, valFn, l) => {
  l = l || ea && ea.length;
  const vec = Array(l--);

  for (let ra, rb; l >= 0 && (ra = ea[l]) && (rb = eb[l]); l--) vec[l] = [keyFn(ra[0], rb[0], l), valFn(ra[1], rb[1], l)];

  return vec;
};

const mutazip = (ea, eb, keyFn, valFn, l) => {
  l = l || ea && ea.length;
  l--;

  for (let ra, rb; l >= 0 && (ra = ea[l]) && (rb = eb[l]); l--) {
    ra[0] = keyFn(ra[0], rb[0], l);
    ra[1] = valFn(ra[1], rb[1], l);
  }

  return ea;
};

export { mutazip, zipper };

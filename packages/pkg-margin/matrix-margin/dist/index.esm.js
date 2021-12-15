import { marginCopy as marginCopy$1 } from '@vect/vector-margin';

const marginCopy = (mx, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx === null || mx === void 0 ? void 0 : mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = marginCopy$1(mx[i], l, r, w);

  for (let i = bs; i < h; i++) x[i] = marginCopy$1(mx[i], l, r, w);

  return x;
};

const rowMarginMapper = (row, i, fn, l, r, w) => {
  const ve = Array(w || (w = row === null || row === void 0 ? void 0 : row.length)),
        s = w - r;

  for (--l; l >= 0; l--) ve[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) ve[w] = fn(row[w], i, w);

  return ve;
};

const marginMapper = (mx, fn, t, b, l, r, h, w) => {
  const x = Array(h || (h = mx === null || mx === void 0 ? void 0 : mx.length)),
        bs = h - b;

  for (let i = 0; i < t; i++) x[i] = rowMarginMapper(mx[i], i, fn, l, r, w);

  for (let i = bs; i < h; i++) x[i] = rowMarginMapper(mx[i], i, fn, l, r, w);

  return x;
};

const rowMarginMutate = (row, i, fn, l, r, w) => {
  w = w || (row === null || row === void 0 ? void 0 : row.length);
  const s = w - r;

  for (--l; l >= 0; l--) row[l] = fn(row[l], i, l);

  for (--w; w >= s; w--) row[w] = fn(row[w], i, w);

  return row;
};

const marginMutate = (mx, fn, t, b, l, r, h, w) => {
  h = h || (mx === null || mx === void 0 ? void 0 : mx.length);
  const s = h - b;

  for (let i = 0; i < t; i++) rowMarginMutate(mx[i], i, fn, l, r, w);

  for (let i = s; i < h; i++) rowMarginMutate(mx[i], i, fn, l, r, w);

  return mx;
};

export { marginCopy, marginMapper, marginMutate };

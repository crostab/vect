import { Columns } from '@vect/column-getter';

const zipper = (ma, mb, zipOnColumns, h, w) => {
  var _ma$;

  h = h || (ma == null ? void 0 : ma.length), w = w || h && ((_ma$ = ma[0]) == null ? void 0 : _ma$.length);
  const banner = Array(w);

  for (let c = 0, ca = Columns(ma), cb = Columns(mb); c < w; c++) banner[c] = zipOnColumns(ca(c, h), cb(c, h), c);

  return banner;
};

const zipperBand = (mx, band, zipColBand, h, w) => {
  var _mx$;

  h = h || (mx == null ? void 0 : mx.length), w = w || h && ((_mx$ = mx[0]) == null ? void 0 : _mx$.length);
  const vec = Array(w);

  for (let ci = 0, columns = Columns(mx); ci < w; ci++) vec[ci] = zipColBand(columns(ci, h), band, ci);

  return vec;
};

export { zipper, zipperBand };

import { Columns } from '@vect/column-getter';

const zipper = (ma, mb, zipOnColumns, h, w) => {
  h = h || ma?.length, w = w || h && ma[0]?.length;
  const banner = Array(w);
  for (let c = 0, ca = Columns(ma), cb = Columns(mb); c < w; c++)
    banner[c] = zipOnColumns(ca(c, h), cb(c, h), c);
  return banner
};

const zipperBand = (mx, band, zipColBand, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length;
  const vec = Array(w);
  for (let ci = 0, columns = Columns(mx); ci < w; ci++)
    vec[ci] = zipColBand(columns(ci, h), band, ci);
  return vec
};

export { zipper, zipperBand };

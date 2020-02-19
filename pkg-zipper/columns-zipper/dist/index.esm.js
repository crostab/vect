import { size } from '@vect/matrix-size';
import { Columns } from '@vect/column-getter';

const zipper = (ma, mb, zipOnColumns) => {
  const [h, w] = size(ma),
        banner = Array(w);

  for (let c = 0, ca = Columns(ma), cb = Columns(mb); c < w; c++) banner[c] = zipOnColumns(ca(c, h), cb(c, h), c);

  return banner;
};

const zipperBand = (matrix, band, zipColBand) => {
  const [ht, wd] = size(matrix),
        vec = Array(wd);

  for (let ci = 0, columns = Columns(matrix); ci < wd; ci++) vec[ci] = zipColBand(columns(ci, ht), band, ci);

  return vec;
};

export { zipper, zipperBand };

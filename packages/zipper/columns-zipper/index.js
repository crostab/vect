import { Columns } from '@vect/column-getter';

const zip = (mxa, mxb, pairCol) => {
  const ht = mxa?.length;
  const wd = ht && mxa[0]?.length;
  const result = Array(wd);
  for (let col = 0, ca = Columns(mxa), cb = Columns(mxb); col < wd; col++)
    result[col] = pairCol(ca(col, ht), cb(col, ht), col);
  return result
};

const zipValue = (mx, value, pairCol) => {
  const ht = mx?.length;
  const wd = ht && mx[0]?.length;
  const result = Array(wd);
  for (let col = 0, columns = Columns(mx); col < wd; col++)
    result[col] = pairCol(columns(col, ht), value, col);
  return result
};

export { zip, zipValue as zipBand, zipValue, zip as zipper };

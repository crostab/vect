function columnZipper(ma, mb, fn, l) {
  const {
    y
  } = this;
  l = l || ma && ma.length;
  const mt = Array(l--);

  for (let ra; l >= 0 && (ra = ma[l].slice()); l--) {
    ra[y] = fn(ra[y], mb[l][y], l);
    mt[l] = ra;
  }

  return mt;
}
/**
 * Return a zipper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnMapper = y => columnZipper.bind({
  y
});

const zipper = (ma, mb, y, fn, l) => columnZipper.call({
  y
}, ma, mb, fn, l);

function columnMutazip(ma, mb, fn, l) {
  const {
    y
  } = this;
  l = l || ma && ma.length;
  l--;

  for (let r; l >= 0 && (r = ma[l]); l--) r[y] = fn(r[y], mb[l][y], l);

  return ma;
}
/**
 * Return a mutazip function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */

const ColumnMutate = y => columnMutazip.bind({
  y
});

const mutazip = (ma, mb, y, fn, l) => columnMutazip.call({
  y
}, ma, mb, fn, l);

export { ColumnMapper, ColumnMutate, mutazip, zipper };

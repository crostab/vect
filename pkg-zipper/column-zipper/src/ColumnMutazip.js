export function columnMutazip (ma, mb, fn, l) {
  const { y } = this
  l = l || ma && ma.length
  l--
  for (let r; l >= 0 && (r = ma[l]); l--)
    r[y] = fn(r[y], mb[l][y], l)
  return ma
}

/**
 * Return a mutazip function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnMutate = (y) => columnMutazip.bind({ y })

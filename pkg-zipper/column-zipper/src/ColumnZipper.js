export function columnZipper (ma, mb, fn, l) {
  const { y } = this
  l = l || ma && ma.length
  const mt = Array(l--)
  for (let ra; l >= 0 && (ra = ma[l].slice()); l--) {
    ra[y] = fn(ra[y], mb[l][y], l)
    mt[l] = ra
  }
  return mt
}

/**
 * Return a zipper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnZipper = (y) => columnZipper.bind({ y })





export function columnMapper (mx, fn, l) {
  const { y } = this
  l = l || mx && mx.length
  const mt = Array(l)
  for (let r; --l >= 0 && (r = mx[l].slice());) {
    r[y] = fn(r[y], l)
    mt[l] = r
  }
  return mt
}

/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnMapper = (y) => columnMapper.bind({ y })





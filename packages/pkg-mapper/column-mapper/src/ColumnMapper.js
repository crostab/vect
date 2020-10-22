export function columnMapperDuplicate (mx, fn, l) {
  l = l || mx?.length
  const mt = Array(l)
  for (let i = 0, r, { y } = this; i < l; i++) {
    mt[i] = r = mx[i].slice()
    r[y] = fn(r[y], i)
  }
  return mt
}

export function columnMapper (mx, fn, l) {
  l = l || mx?.length
  const vec = Array(l)
  for (let i = 0, { y } = this; i < l; i++)
    vec[i] = fn(mx[i][y], i)
  return vec
}

/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @param {boolean=true} [duplicate]  - true if duplicate original matrix form
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnMapper = (y, duplicate=true) => duplicate
  ? columnMapperDuplicate.bind({ y })
  : columnMapper.bind({ y })





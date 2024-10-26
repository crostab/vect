export function columnMutate(mx, fn, l) {
  l = l || mx?.length
  for (let i = 0, r, { y } = this; i < l && (r = mx[i]); i++)
    r[y] = fn(r[y], i)
  return mx
}

/**
 * Return a mutate function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnMutate = (y) => columnMutate.bind({ y })


export function iterate(mx, y, to, l) {
  l = l || mx?.length
  for (let i = 0; i < l; i++)
    to.call(this, mx[i][y], i)
}

export function columnIterate(mx, to, l) {
  l = l || mx?.length
  for (let i = 0, { y, data } = this; i < l; i++)
    to.call(data, mx[i][y], i)
}

/**
 * Return a mapper function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @param {*} thisArg
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnIterate = (y, thisArg) =>
  columnIterate.bind(thisArg ? { y } : { y, data: thisArg })

export function columnMapperDuplicate(mx, fn, l) {
  l = l || mx?.length
  const mt = Array(l)
  for (let i = 0, r, { y } = this; i < l; i++) {
    mt[i] = r = mx[i].slice()
    r[y] = fn(r[y], i)
  }
  return mt
}

export function columnMapper(mx, fn, l) {
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
export const ColumnMapper = (y, duplicate = true) => duplicate
  ? columnMapperDuplicate.bind({ y })
  : columnMapper.bind({ y })


export function mutate(mx, y, fn, l) { return columnMutate.call({y}, mx, fn, l) }

export function mapper(mx, y, fn, l) { return columnMapper.call({y}, mx, fn, l) }



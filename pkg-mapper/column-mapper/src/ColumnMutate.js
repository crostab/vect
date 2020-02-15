export function columnMutate (mx, fn, l) {
  const { y } = this
  l = l || mx && mx.length
  for (let r; --l >= 0 && (r = mx[l]);)
    r[y] = fn(r[y], l)
  return mx
}

/**
 * Return a mutate function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnMutate = (y) => columnMutate.bind({ y })

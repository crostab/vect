import { size } from '@vect/matrix-index'

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @returns {*[]}
 */
export function mapper (mx, fn) {
  const [ht, wd] = size(mx), tx = Array(ht)
  for (let i = 0, j, r, tr; i < ht; i++)
    for (tx[i] = tr = Array(wd), r = mx[i], j = 0; j < wd; j++)
      tr[j] = fn(r[j], i, j)
  return tx
}

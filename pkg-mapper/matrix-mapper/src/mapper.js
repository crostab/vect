import { mapper as mapAr } from '@vect/vector-mapper'
import { size } from '@vect/matrix-size'

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @returns {*[]}
 */
export function mapper (mx, fn) {
  const [ht, wd] = size(mx)
  return mapAr(mx, (r, i) => mapAr(r, (x, j) => fn(x, i, j), wd), ht)
}

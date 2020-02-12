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
  // return mx.map((r, i) => r.map((el, j) => fn(el, i, j)))
  return mapAr(mx, (r, i) => mapAr(r, (x, j) => fn(x, i, j), wd), ht)
}

/**
 * Iterate through the columns of a 2d-array.
 * @param {*[][]} mx
 * @param {function(*[]):[]} fnOnColumn
 * @returns {*[][]}
 */
export function mapColumns (mx, fnOnColumn) {
  return Mx.columns(mx, fnOnColumn) |> Mx.transpose
}

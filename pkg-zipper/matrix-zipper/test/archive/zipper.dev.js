import { size } from '@vect/matrix-size'
import { zipper as zipVec } from '@vect/vector-zipper'

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} ma
 * @param {*[][]} mb
 * @param {function} fn
 * @returns {*[]}
 */
export const zipper = (ma, mb, fn) => {
  const [ht, wd] = size(ma)
  return zipVec(ma, mb, (ra, rb, i) => zipVec(ra, rb, (x, y, j) => fn(x, y, i, j), wd), ht)
}

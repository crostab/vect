import { size }             from '@vect/matrix-index'
import { mapper as mapVec } from '@vect/vector-mapper'

/**
 * Iterate through elements on each (x of rows,y of columns) coordinate of a 2d-array.
 * @param {*[][]} mx
 * @param {function} fn
 * @returns {*[]}
 */
export const mapper = (mx, fn) => {
  const [ht, wd] = size(mx)
  return mapVec(mx, (r, i) =>
      mapVec(r, (x, j) =>
          fn(x, i, j),
        wd),
    ht)
}


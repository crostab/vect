import { mapper } from '@vect/vector-mapper'

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @param {number} [h]
 * @param {number} [w]
 * @returns {*[][]}
 */
export const transpose = (mx, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length
  const cols = Array(w)
  for (--w; w >= 0; w--) cols[w] = mapper(mx, r => r[w], h)
  return cols
}

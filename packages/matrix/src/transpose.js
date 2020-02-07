import { map } from '@vect/vector'

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */
export function transpose (mx) {
  if (!mx?.length) return mx
  let w = mx[0].length, cols = Array(w)
  for (--w; w >= 0; w--) cols[w] = map(mx, r => r[w])
  return cols
}

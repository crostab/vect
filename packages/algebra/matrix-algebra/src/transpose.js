import { height, width } from '@vect/matrix-index'

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */
export const transpose = (mx) => {
  const h = height(mx), w = width(mx), cols = Array(w)
  for (let j = 0; j < w; j++)
    for (let i = 0, col = cols[j] = Array(h); i < h; i++)
      col[i] = mx[i][j]
  return cols
}

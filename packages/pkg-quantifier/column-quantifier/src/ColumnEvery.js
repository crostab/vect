import { size } from '@vect/matrix-size'

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
export function columnEvery (mx, crit, h, w) {
  const { y } = this
  h = h || mx?.length, w = w || h && mx[0]?.length
  if (!w || y >= w) return true
  for (let i = 0; i < h; i++)
    if (!crit(mx[i][y], i)) return false
  return true
}

export const ColumnEvery = y => columnEvery.bind({ y })

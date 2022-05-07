import { size } from '@vect/matrix-index'

/**
 * Return true if some element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
export function columnSome (mx, crit, h, w) {
  const { y } = this
  h = h || mx?.length, w = w || h && mx[0]?.length
  if (!w || y >= w) return false
  for (let i = 0; i < h; i++)
    if (crit(mx[i][y], i)) return true
  return false
}

export const ColumnSome = y => columnSome.bind({ y })

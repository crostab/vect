import { size } from '@vect/matrix-size'

/**
 * Return true if some element in a specified column of a matrix matches the input criteria.
 * Return false if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */
export function columnSome (mx, crit) {
  const { y } = this
  const [ht, wd] = size(mx)
  if (!wd || y >= wd) return false
  for (let i = 0; i < ht; i++)
    if (crit(mx[i][y], i)) return true
  return false
}

export const ColumnSome = y => columnSome.bind({ y })

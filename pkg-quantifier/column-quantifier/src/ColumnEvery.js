import { size } from '@vect/matrix-size'

/**
 * Return true if every element in a specified column of a matrix matches the input criteria.
 * Return true if either height or width is zero, or specified column index >= width.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */
export function columnEvery (mx, crit) {
  const { y } = this
  const [ht, wd] = size(mx)
  if (!wd || y >= wd) return true
  for (let i = 0; i < ht; i++)
    if (!crit(mx[i][y], i)) return false
  return true
}

export const ColumnEvery = y => columnEvery.bind({ y })

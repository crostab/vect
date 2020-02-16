import { size } from '@vect/matrix-size'

/**
 * Return true if every element in a matrix matches the input criteria.
 * Return true if either height or width is zero.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @returns {boolean}
 */
export function every (mx, crit) {
  const [ht, wd] = size(mx)
  for (let i = 0, j, r; i < ht; i++)
    for (j = 0, r = mx[i]; j < wd; j++)
      if (!crit(r[j], i, j)) return false
  return true
}



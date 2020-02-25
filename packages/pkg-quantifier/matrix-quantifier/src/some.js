/**
 * Return true if at least one element in a matrix matches the input criteria.
 * Return false if either height or width is zero.
 * @param {*[][]} mx
 * @param {function(*,number?,number?):*} crit
 * @param {number} [h]
 * @param {number} [w]
 * @returns {boolean}
 */
export const some = (mx, crit, h, w) => {
  h = h || mx?.length, w = w || h && mx[0]?.length
  if (!w) return false
  for (let i = 0, j, r; i < h; i++)
    for (j = 0, r = mx[i]; j < w; j++)
      if (crit(r[j], i, j)) return true
  return false
}

/**
 *
 * @param {*[]} ar
 * @param {number} [l] - left margin length
 * @param {number} [r] - right margin length
 * @param {number} [w] - array length
 * @returns {*[]}
 */
export const copyMargin = (ar, l, r, w) => {
  const ve = Array(w = w || ar.length), s = w - r
  for (--l; l >= 0; l--) ve[l] = ar[l]
  for (--w; w >= s; w--) ve[w] = ar[w]
  return ve
}




/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [l] - left margin length
 * @param {number} [r] - right margin length
 * @param {number} [w] - array length
 * @returns {*[]}
 */
export const mapMargin = (ar, fn, l, r, w) => {
  const ve = Array(w = w || ar.length), s = w - r
  for (--l; l >= 0; l--) ve[l] = fn(ar[l], l)
  for (--w; w >= s; w--) ve[w] = fn(ar[w], w)
  return ve
}



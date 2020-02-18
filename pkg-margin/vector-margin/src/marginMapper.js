/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
export const marginMapper = (ar, fn, h, t, l) => {
  const ve = Array(l = l || ar.length), s = l - t
  for (--h; h >= 0; h--) ve[h] = fn(ar[h], h)
  for (--l; l >= s; l--) ve[l] = fn(ar[l], l)
  return ve
}



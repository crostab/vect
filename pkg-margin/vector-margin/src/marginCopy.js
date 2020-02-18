/**
 *
 * @param {*[]} ar
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
export const marginCopy = (ar, h, t, l) => {
  const ve = Array(l = l || ar.length), s = l - t
  for (--h; h >= 0; h--) ve[h] = ar[h]
  for (--l; l >= s; l--) ve[l] = ar[l]
  return ve
}




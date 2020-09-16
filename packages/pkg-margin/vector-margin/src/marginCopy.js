/**
 *
 * @param {*[]} vec
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
export const marginCopy = (vec, h, t, l) => {
  const ve = Array(l = l ?? vec?.length), s = l - t
  for (--h; h >= 0; h--) ve[h] = vec[h]
  for (--l; l >= s; l--) ve[l] = vec[l]
  return ve
}




/**
 *
 * @param {*[]} vec
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
export const marginMapper = (vec, fn, h, t, l) => {
  const ve = Array(l = l || vec.length), s = l - t
  for (--h; h >= 0; h--) ve[h] = fn(vec[h], h)
  for (--l; l >= s; l--) ve[l] = fn(vec[l], l)
  return ve
}



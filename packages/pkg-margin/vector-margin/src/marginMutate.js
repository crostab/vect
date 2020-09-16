/**
 *
 * @param {*[]} vec
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
export const marginMutate = (vec, fn, h, t, l) => {
  l = l ?? vec?.length
  const s = l - t
  for (--h; h >= 0; h--) vec[h] = fn(vec[h], h)
  for (--l; l >= s; l--) vec[l] = fn(vec[l], l)
  return vec
}



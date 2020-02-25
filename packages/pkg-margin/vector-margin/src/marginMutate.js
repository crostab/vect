/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} [h] - head margin length
 * @param {number} [t] - tail margin length
 * @param {number} [l] - array length
 * @returns {*[]}
 */
export const marginMutate = (ar, fn, h, t, l) => {
  l = l || ar.length
  const s = l - t
  for (--h; h >= 0; h--) ar[h] = fn(ar[h], h)
  for (--l; l >= s; l--) ar[l] = fn(ar[l], l)
  return ar
}



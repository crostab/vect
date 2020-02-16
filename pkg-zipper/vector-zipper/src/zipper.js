/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */
export const zipper = (a, b, fn, l) => {
  l = l || a && a.length
  const vec = Array(l)
  for (--l; l >= 0; l--) vec[l] = fn(a[l], b[l], l)
  return vec
}



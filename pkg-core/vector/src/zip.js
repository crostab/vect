/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} zipper
 * @param {number} [l]
 * @returns {*[]}
 */
export const zip = (a, b, zipper, l) => {
  l = l || a && a.length
  const v = Array(l)
  for (--l; l >= 0; l--) v[l] = zipper(a[l], b[l], l)
  return v
}

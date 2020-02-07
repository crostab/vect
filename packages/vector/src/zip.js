/**
 * zip two arrays, return the zipped array
 * @param {Array} lv
 * @param {Array} rv
 * @param {function(*,*,number?):*} zipper
 * @param {number} l
 * @returns {*[]}
 */
export const zip = (lv, rv, zipper, l) => {
  l = l || lv.length
  const ar = Array(l)
  for (--l; l >= 0; l--) ar[l] = zipper(lv[l], rv[l], l)
  return ar
}

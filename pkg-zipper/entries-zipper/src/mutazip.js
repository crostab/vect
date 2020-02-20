/**
 *
 * @param {[*,*][]} ea
 * @param {[*,*][]} eb
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const mutazip = (ea, eb, keyMap, valMap, l) => {
  valMap = valMap || keyMap
  l = l || ea && ea.length
  l--
  for (let ra, rb; l >= 0 && (ra = ea[l]) && (rb = eb[l]); l--) {
    ra[0] = keyMap(ra[0], rb[0], l)
    ra[1] = valMap(ra[1], rb[1], l)
  }
  return ea
}

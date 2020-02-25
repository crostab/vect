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
  l = l || ea && ea.length, valMap = valMap || keyMap
  for (let a, b, i = 0; i < l && (a = ea[i]) && (b = eb[i]); i++)
    a[0] = keyMap(a[0], b[0], i) , a[1] = valMap(a[1], b[1], i)
  return ea
}

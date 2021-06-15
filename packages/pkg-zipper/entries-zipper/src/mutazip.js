/**
 *
 * @param {[*,*][]} entA
 * @param {[*,*][]} entB
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [hi]
 * @returns {[*,*][]}
 */
export const mutazip = (entA, entB, keyMap, valMap, hi) => {
  hi = hi ?? entA?.length, valMap = valMap ?? keyMap
  for (let i = 0, a, b; i < hi && ( a = entA[i] ) && ( b = entB[i] ); i++) {
    a[0] = keyMap(a[0], b[0], i)
    a[1] = valMap(a[1], b[1], i)
  }
  return entA
}

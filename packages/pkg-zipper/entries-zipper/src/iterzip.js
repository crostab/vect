/**
 *
 * @param {[*,*][]} entA
 * @param {[*,*][]} entB
 * @param {function} keyAction
 * @param {function} [valueAction]
 * @param {number} [hi]
 * @returns {[*,*][]}
 */
export const iterzip = (entA, entB, keyAction, valueAction, hi) => {
  hi = hi ?? entA?.length, valueAction = valueAction ?? keyAction
  for (let i = 0, a, b; i < hi && ( a = entA[i] ) && ( b = entB[i] ); i++) {
    keyAction(a[0], b[0], i)
    valueAction(a[1], b[1], i)
  }
  return void 0
}

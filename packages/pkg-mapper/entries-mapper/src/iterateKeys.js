/**
 *
 * @param {[*,*][]} entries
 * @param {function} keyFn
 * @param {number} [l]
 * @returns {undefined}
 */
export const iterateKeys = function (entries, keyFn, l) {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], keyFn.call(this, r[0], i)
  }
}

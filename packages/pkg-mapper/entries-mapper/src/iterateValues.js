/**
 *
 * @param {[*,*][]} entries
 * @param {Function} valFn
 * @param {number} [l]
 * @returns {undefined}
 */
export const iterateValues = function (entries, valFn, l) {
  l = l ?? entries?.length
  for (let i = 0, r; i < l; i++) {
    r = entries[i], valFn.call(this, r[1], i)
  }
}

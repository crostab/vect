import { duozipper } from './seriesZipper'

/**
 *
 * @param {[*,*][]} ea
 * @param {[*,*][]} eb
 * @param {function} keyMap
 * @param {function} [valMap]
 * @param {number} [l]
 * @returns {[*,*][]}
 */
export const zipper = (ea, eb, keyMap, valMap, l) =>
  duozipper.call({ key: keyMap, value: valMap, hi: l }, ea, eb)

import { duozipper } from './seriesZipper'

/**
 * zip two arrays, return the zipped array
 * @param {Array} a
 * @param {Array} b
 * @param {function(*,*,number?):*} fn
 * @param {number} [l]
 * @returns {*[]}
 */
export const zipper = (a, b, fn, l) =>
  duozipper.call({ fn, hi: l }, a, b)



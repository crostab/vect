import { duozipper } from './seriesZipper'

/**
 * Zip 2 matrices by each elements from both.
 * @param {*[][]} ma
 * @param {*[][]} mb
 * @param {function} fn
 * @returns {*[]}
 */
export const zipper = (ma, mb, fn) =>
  duozipper.call({ fn }, ma, mb)

import { isMatrix } from './isMatrix'

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export const coins = mx => isMatrix(mx)
  ? mx[0].map((_, i) => i)
  : []

import { first }    from '@vect/vector-index'
import { isMatrix } from './isMatrix'

/**
 *
 * @param {*[][]} mx
 * @return {number[]}
 */
export const coins = mx => isMatrix(mx)
  ? first(mx).map((_, i) => i)
  : []
